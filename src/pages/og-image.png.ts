import type { APIRoute } from 'astro';
import { join } from 'node:path';
import sharp from 'sharp';
import { site } from '../config';

const width = 1200;
const height = 630;
const avatarSize = 252;

const escapeXml = (text: string) => text.replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
})[char] ?? char);

const wrapLines = (text: string, maxLength: number) => {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if (line && `${line} ${word}`.length > maxLength) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines;
};

export const GET: APIRoute = async () => {
  const colors = site.theme.dark;
  const name = escapeXml(site.profile.name);
  const domain = escapeXml(new URL(site.meta.siteUrl).hostname.replace(/^www\./, '').toUpperCase());
  const location = escapeXml(site.profile.location);
  const taglineLines = wrapLines(site.profile.tagline, 38);
  const tagline = taglineLines.map((line, index) =>
    `<tspan x="80" dy="${index ? 42 : 0}">${escapeXml(line)}</tspan>`
  ).join('');
  const nameSize = Math.max(56, 82 - Math.max(0, site.profile.name.length - 15) * 2);

  const card = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="${colors.background}"/>
    <rect x="48" y="48" width="1104" height="534" rx="14" fill="none" stroke="${colors.border}" stroke-width="2"/>
    <text x="80" y="115" fill="${colors.muted}" font-family="monospace" font-size="21" letter-spacing="3">${domain}</text>
    <line x1="80" y1="143" x2="1120" y2="143" stroke="${colors.border}" stroke-width="2"/>
    <text x="76" y="287" fill="${colors.foreground}" font-family="sans-serif" font-size="${nameSize}" font-weight="700" letter-spacing="-3">${name}</text>
    <text x="80" y="345" fill="${colors.muted}" font-family="monospace" font-size="28">${tagline}</text>
    <line x1="80" y1="518" x2="1120" y2="518" stroke="${colors.border}" stroke-width="2"/>
    <text x="80" y="558" fill="${colors.soft}" font-family="monospace" font-size="18">${location}</text>
    <circle cx="970" cy="326" r="132" fill="none" stroke="${colors.border}" stroke-width="2"/>
  </svg>`);

  const imagePath = join(process.cwd(), 'public', site.profile.image.replace(/^\/+/, ''));
  const avatar = await sharp(imagePath).resize(avatarSize, avatarSize, { fit: 'cover' }).grayscale().png().toBuffer();
  const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${avatarSize}" height="${avatarSize}"><circle cx="126" cy="126" r="126" fill="#fff"/></svg>`);
  const roundAvatar = await sharp(avatar).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  const image = await sharp(card).composite([{ input: roundAvatar, left: 844, top: 200 }]).png({ compressionLevel: 9 }).toBuffer();

  return new Response(new Uint8Array(image), {
    headers: { 'Content-Type': 'image/png' },
  });
};
