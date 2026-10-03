import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { site } from '../config';

const width = 1200;
const height = 630;

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
  const descriptionLines = wrapLines(site.meta.description, 52);
  const descriptionY = 362 - (descriptionLines.length - 1) * 22;
  const description = descriptionLines.map((line, index) =>
    `<tspan x="100" dy="${index ? 44 : 0}">${escapeXml(line)}</tspan>`
  ).join('');
  const titleSize = Math.max(60, 84 - Math.max(0, site.meta.title.length - 16) * 2);

  const card = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="${colors.background}"/>
    <text x="96" y="${descriptionY - 78}" fill="${colors.foreground}" font-family="sans-serif" font-size="${titleSize}" font-weight="700" letter-spacing="-3">${escapeXml(site.meta.title)}</text>
    <text x="100" y="${descriptionY}" fill="${colors.muted}" font-family="monospace" font-size="30">${description}</text>
  </svg>`);
  const image = await sharp(card).png({ compressionLevel: 9 }).toBuffer();

  return new Response(new Uint8Array(image), {
    headers: { 'Content-Type': 'image/png' },
  });
};
