import type { Language } from "../i18n/ui";
import { localizedPath } from "../i18n/utils";

export type LinkIcon = "home" | "linkedin" | "github" | "vscode" | "mail";
export type LinkBehavior = "internal" | "external" | "email";

export type HubLink = {
  title: string;
  subtitle: string;
  href: string;
  icon: LinkIcon;
  behavior: LinkBehavior;
  featured?: boolean;
};

export type LinksContent = {
  seo: {
    title: string;
    description: string;
  };
  identity: {
    name: string;
    role: string;
  };
  a11y: {
    sectionLabel: string;
    open: string;
    newTab: string;
    sendEmail: string;
  };
  links: HubLink[];
};

const externalUrls = {
  linkedin: "https://www.linkedin.com/in/sergio-del-cerro-32405238a/",
  github: "https://github.com/DevBySergio",
  marketplace:
    "https://marketplace.visualstudio.com/publishers/DevBySergio",
  email: "mailto:devbysergio@gmail.com",
} as const;

const content: Record<Language, LinksContent> = {
  en: {
    seo: {
      title: "Sergio Links | Full-stack Developer",
      description:
        "Connect with me: Portfolio, GitHub, LinkedIn, and contact info.",
    },
    identity: {
      name: "Sergio",
      role: "Full-Stack Software Developer",
    },
    a11y: {
      sectionLabel: "Sergio's links",
      open: "Open",
      newTab: "in a new tab",
      sendEmail: "Email Sergio",
    },
    links: [
      {
        title: "Portfolio",
        subtitle: "Work and selected projects",
        href: localizedPath("en", "/"),
        icon: "home",
        behavior: "internal",
        featured: true,
      },
      {
        title: "LinkedIn",
        subtitle: "Professional profile",
        href: externalUrls.linkedin,
        icon: "linkedin",
        behavior: "external",
      },
      {
        title: "GitHub",
        subtitle: "Code and contributions",
        href: externalUrls.github,
        icon: "github",
        behavior: "external",
      },
      {
        title: "VS Code Marketplace",
        subtitle: "Developer extensions",
        href: externalUrls.marketplace,
        icon: "vscode",
        behavior: "external",
      },
      {
        title: "Email",
        subtitle: "Contact for projects",
        href: externalUrls.email,
        icon: "mail",
        behavior: "email",
      },
    ],
  },
  es: {
    seo: {
      title: "Enlaces de Sergio | Desarrollador Full-stack",
      description:
        "Conecta conmigo: portfolio, GitHub, LinkedIn e información de contacto.",
    },
    identity: {
      name: "Sergio",
      role: "Desarrollador de Software Full-Stack",
    },
    a11y: {
      sectionLabel: "Enlaces de Sergio",
      open: "Abrir",
      newTab: "en una pestaña nueva",
      sendEmail: "Enviar un email a Sergio",
    },
    links: [
      {
        title: "Portfolio",
        subtitle: "Trabajo y proyectos seleccionados",
        href: localizedPath("es", "/"),
        icon: "home",
        behavior: "internal",
        featured: true,
      },
      {
        title: "LinkedIn",
        subtitle: "Perfil profesional",
        href: externalUrls.linkedin,
        icon: "linkedin",
        behavior: "external",
      },
      {
        title: "GitHub",
        subtitle: "Código y contribuciones",
        href: externalUrls.github,
        icon: "github",
        behavior: "external",
      },
      {
        title: "VS Code Marketplace",
        subtitle: "Extensiones para desarrolladores",
        href: externalUrls.marketplace,
        icon: "vscode",
        behavior: "external",
      },
      {
        title: "Email",
        subtitle: "Contacto para proyectos",
        href: externalUrls.email,
        icon: "mail",
        behavior: "email",
      },
    ],
  },
};

export const getLinksContent = (lang: Language): LinksContent => content[lang];
