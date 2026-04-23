export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';

export const ui = {
  en: {
    'meta.siteTitle': 'Sergio – Full-stack Developer',
    'meta.description': 'Full-stack developer focused on building scalable web applications.',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'footer.builtWith': 'Built with Astro',
    'footer.github': 'GitHub',
    'footer.linkedin': 'LinkedIn',
    'language.label': 'Language',
  },
  es: {
    'meta.siteTitle': 'Sergio – Desarrollador Full-stack',
    'meta.description': 'Desarrollador full-stack enfocado en crear aplicaciones web escalables.',
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'footer.builtWith': 'Hecho con Astro',
    'footer.github': 'GitHub',
    'footer.linkedin': 'LinkedIn',
    'language.label': 'Idioma',
  },
} as const;

export type TranslationKey = keyof (typeof ui)['en'];
