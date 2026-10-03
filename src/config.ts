/** All visible copy, links, theme colors, and entrance timing live here. */
export const site = {
  meta: {
    title: 'Luiz Miranda',
    description: 'Luiz Miranda builds web products, backend systems, bots, and developer tools.',
    language: 'en',
    siteUrl: 'https://www.luiz.ink',
    openGraphImage: '/og-image.png',
    openGraphImageAlt: 'Luiz Miranda portfolio preview with portrait and tagline',
  },
  theme: {
    default: 'dark',
    light: {
      background: '#faf9f7',
      foreground: '#1b1b1b',
      muted: '#66666a',
      soft: '#858589',
      border: '#e5e3e0',
    },
    dark: {
      background: '#0b0b0b',
      foreground: '#e9e9e9',
      muted: '#929292',
      soft: '#777777',
      border: '#303030',
    },
  },
  motion: {
    entranceDurationMs: 520,
    entranceDistancePx: 12,
    projectStaggerMs: 55,
  },
  ui: {
    themeToggleLabel: 'Toggle color theme',
  },
  profile: {
    image: '/avatar.webp',
    imageAlt: 'Portrait of Luiz Miranda',
    name: 'Luiz Miranda',
    tagline: 'building web products and tools for developers',
    location: 'Fano, Italy',
  },
  work: {
    label: 'Projects',
    githubLabel: 'Check out my projects',
    allHref: 'https://github.com/atluixx?tab=repositories',
    projects: [
      { name: 'WSIO', summary: 'a home for everything you share', href: 'https://wsio.lol' },
      { name: 'nine', summary: 'WhatsApp bot with 200+ commands', href: 'https://ninezinho.vercel.app' },
      { name: 'gftp', summary: 'file transfer protocol in Go', href: 'https://github.com/atluixx/gftp' },
    ],
  },
  about: {
    label: 'About me',
    text: "I'm a student and independent developer. I work mainly with TypeScript and Go, and I enjoy learning new technologies and turning ideas into useful projects.",
  },
  contact: {
    label: 'Work with me',
    href: 'mailto:luizmiranda.work@outlook.com',
  },
  social: {
    label: "Let's connect",
    links: [
      { label: 'X (Twitter)', href: 'https://x.com/atluixx', icon: 'x' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/miranda-luiz', icon: 'linkedin' },
    ],
  },
} as const;
