/** All visible copy, links, theme colors, and entrance timing live here. */
export const site = {
  meta: {
    title: 'Luiz Miranda',
    description: 'I turn ideas into useful software.',
    language: 'en',
    siteUrl: 'https://www.luiz.ink',
    openGraphImage: '/og-image.png',
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
    tagline: 'making useful software for the web',
    location: 'Fano, Italy',
  },
  work: {
    label: 'Projects',
    githubLabel: 'Check out my projects',
    allHref: 'https://github.com/atluixx?tab=repositories',
    projects: [
      { name: 'WSIO', summary: 'link-in-bio pages with click stats', href: 'https://wsio.lol' },
      { name: 'nine', summary: 'WhatsApp bot with 200+ commands', href: 'https://ninezinho.vercel.app' },
      { name: 'gftp', summary: 'chunked file transfers in Go', href: 'https://github.com/atluixx/gftp' },
    ],
  },
  about: {
    label: 'About me',
    text: "I'm a student and independent developer working with TypeScript and Go. I build web products and developer tools, and I'm open to collaborating on new ones.",
  },
  contact: {
    label: 'Work with me',
    email: 'luizmiranda.work@outlook.com',
    copyLabel: 'Copy email',
    copiedLabel: 'Copied',
  },
  social: {
    label: "Let's connect",
    links: [
      { label: 'X (Twitter)', href: 'https://x.com/atluixx', icon: 'x' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/miranda-luiz', icon: 'linkedin' },
    ],
  },
} as const;
