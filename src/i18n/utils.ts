import { defaultLanguage, type Language, languages, type TranslationKey, ui } from './ui';

export const getLangFromUrl = (url: URL): Language => {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as Language;
  }
  return defaultLanguage;
};

export const stripLocalePrefix = (path: string): string => {
  const segments = path.split('/').filter(Boolean);
  if (segments[0] && segments[0] in languages) {
    const remaining = segments.slice(1).join('/');
    return remaining ? `/${remaining}` : '/';
  }
  return path || '/';
};

export const useTranslations = (lang: Language) => {
  return (key: TranslationKey): string => {
    return ui[lang][key] ?? ui[defaultLanguage][key];
  };
};

export const localizedPath = (lang: Language, path = '/'): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (lang === defaultLanguage) {
    return normalizedPath;
  }

  if (normalizedPath === '/') {
    return `/${lang}`;
  }

  return `/${lang}${normalizedPath}`;
};
