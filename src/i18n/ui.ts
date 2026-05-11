export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "en";

export const ui = {
  en: {
    "meta.siteTitle": "Sergio - Full-stack Developer",
    "meta.description":
      "Full-stack developer focused on building scalable web applications.",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About me",
    "a11y.skipToContent": "Skip to content",
    "a11y.toggleMenu": "Toggle menu",
    "footer.builtWith": "Built with Astro",
    "footer.github": "GitHub",
    "footer.linkedin": "LinkedIn",
    "language.label": "Language",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
    "theme.toggle": "Toggle dark mode",
    "carousel.scrollLeft": "Scroll left",
    "carousel.scrollRight": "Scroll right",
    "modal.close": "Close",
    "modal.screenshots": "Screenshots",
    "modal.viewCode": "View code",
    "modal.install": "Install",
  },
  es: {
    "meta.siteTitle": "Sergio - Desarrollador Full-stack",
    "meta.description":
      "Desarrollador full-stack enfocado en crear aplicaciones web escalables.",
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "a11y.skipToContent": "Saltar al contenido",
    "a11y.toggleMenu": "Abrir o cerrar menú",
    "footer.builtWith": "Hecho con Astro",
    "footer.github": "GitHub",
    "footer.linkedin": "LinkedIn",
    "language.label": "Idioma",
    "theme.light": "Modo claro",
    "theme.dark": "Modo oscuro",
    "theme.toggle": "Cambiar modo oscuro",
    "carousel.scrollLeft": "Desplazar a la izquierda",
    "carousel.scrollRight": "Desplazar a la derecha",
    "modal.close": "Cerrar",
    "modal.screenshots": "Capturas de pantalla",
    "modal.viewCode": "Ver código",
    "modal.install": "Instalar",
  },
} as const;

export type TranslationKey = keyof (typeof ui)["en"];
