import type { ImageMetadata } from "astro";
import betterImagesScreenshot1 from "../assets/images/extensions/betterImages/1.png";
import betterImagesScreenshot2 from "../assets/images/extensions/betterImages/2.png";
import betterImagesIcon from "../assets/images/extensions/betterImages/icon.png";
import devTrackerScreenshot1 from "../assets/images/extensions/dev-tracker/1.png";
import devTrackerScreenshot2 from "../assets/images/extensions/dev-tracker/2.png";
import devTrackerIcon from "../assets/images/extensions/dev-tracker/icon.png";
import justapiScreenshot1 from "../assets/images/extensions/justapi/1.png";
import justapiScreenshot2 from "../assets/images/extensions/justapi/2.png";
import justapiIcon from "../assets/images/extensions/justapi/icon.png";
import lynvoScreenshot1 from "../assets/images/extensions/lynvo/1.png";
import lynvoScreenshot2 from "../assets/images/extensions/lynvo/2.png";
import lynvoIcon from "../assets/images/extensions/lynvo/icon.png";
import bootframeScreenshot1 from "../assets/images/extensions/bootframe/1.png";
import bootframeScreenshot2 from "../assets/images/extensions/bootframe/2.png";
import bootframeIcon from "../assets/images/extensions/bootframe/icon.png";

export type PortfolioImage = ImageMetadata | string;

export type Extension = {
  id: string;
  name: string;
  description: string;

  marketplaceUrl: string;
  repoUrl?: string;

  icon: PortfolioImage;
  screenshots?: PortfolioImage[];

  tags: string[];
  translations?: {
    es?: {
      description: string;
      tags?: string[];
    };
  };
};

export const extensions: Extension[] = [
  {
    id: "dev-tracker",
    name: "DevTracker by Sergio",
    description: "Professional analytics dashboard for developers.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=DevBySergio.DevTrackerBySergio",
    repoUrl: "https://github.com/DevBySergio/DevTracker_by_Sergio",

    icon: devTrackerIcon,
    screenshots: [devTrackerScreenshot1, devTrackerScreenshot2],

    tags: ["VS Code", "Productivity", "Metrics"],
    translations: {
      es: {
        description: "Panel profesional de analítica para desarrolladores.",
        tags: ["VS Code", "Productividad", "Métricas"],
      },
    },
  },
  {
    id: "better-images",
    name: "BetterImages by Sergio",
    description:
      "VS Code extension to edit, process and generate sample images.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=DevBySergio.betterimages",
    repoUrl: "https://github.com/DevBySergio/BetterImages_by_Sergio",

    icon: betterImagesIcon,
    screenshots: [betterImagesScreenshot1, betterImagesScreenshot2],

    tags: ["VS Code", "Productivity", "Images"],
    translations: {
      es: {
        description:
          "Extensión de VS Code para editar, procesar y generar imágenes de muestra.",
        tags: ["VS Code", "Productividad", "Imágenes"],
      },
    },
  },
  {
    id: "justapi",
    name: "JustAPI",
    description:
      "JustAPI is a local-first API client built directly into VS Code. Design, test, and debug HTTP requests with a full-featured interface — collections, variables, auth, response viewer, history, and code generation — all without sending your data anywhere.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=DevBySergio.justapi",
    repoUrl: "https://github.com/DevBySergio/JustAPI_by_Sergio",

    icon: justapiIcon,
    screenshots: [justapiScreenshot1, justapiScreenshot2],

    tags: ["VS Code", "API Client", "HTTP", "Productivity"],
    translations: {
      es: {
        description:
          "JustAPI es un cliente de APIs local integrado directamente en VS Code. Diseña, prueba y depura peticiones HTTP con una interfaz completa — colecciones, variables, autenticación, visor de respuestas, historial y generación de código — todo sin que tus datos salgan de tu máquina.",
        tags: ["VS Code", "Cliente API", "HTTP", "Productividad"],
      },
    },
  },
  {
    id: "lynvo",
    name: "Lynvo",
    description:
      "Lynvo transforms VS Code into a local-first Kanban board with code-linked tasks, Git-backed team sync, and AI agent integration. Manage your entire project without leaving your editor — no servers, no sign-ups, no vendor lock-in.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=DevBySergio.lynvo",
    repoUrl: "https://github.com/DevBySergio/Lynvo_by_Sergio",

    icon: lynvoIcon,
    screenshots: [lynvoScreenshot1, lynvoScreenshot2],

    tags: ["VS Code", "Kanban", "Project Management", "AI"],
    translations: {
      es: {
        description:
          "Lynvo convierte VS Code en un tablero Kanban local-first con tareas vinculadas al código, sincronización en equipo vía Git e integración con agentes de IA. Gestiona todo tu proyecto sin salir del editor — sin servidores, sin registro, sin dependencia externa.",
        tags: ["VS Code", "Kanban", "Gestión de Proyectos", "IA"],
      },
    },
  },
  {
    id: "bootframe",
    name: "BootFrame",
    description:
      "Visual Bootstrap layout builder for VS Code. Compose responsive HTML structures visually with a 12-column grid system, column resizing, drag reordering, and live preview. Supports Bootstrap 4 and 5 — no more hand-writing every container, row, and col combination.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=DevBySergio.bootframe",
    repoUrl: "https://github.com/DevBySergio/bootframe",

    icon: bootframeIcon,
    screenshots: [bootframeScreenshot1, bootframeScreenshot2],

    tags: ["VS Code", "Bootstrap", "Layout Builder", "Snippets"],
    translations: {
      es: {
        description:
          "Constructor visual de layouts Bootstrap para VS Code. Compone estructuras HTML responsivas visualmente con sistema de rejilla de 12 columnas, redimensionamiento de columnas, reorganización por arrastre y vista previa en vivo. Soporta Bootstrap 4 y 5 — olvídate de escribir cada combinación de container, row y col a mano.",
        tags: ["VS Code", "Bootstrap", "Constructor de Layouts", "Snippets"],
      },
    },
  },
];

export const getExtensions = (lang: "en" | "es" = "en"): Extension[] => {
  if (lang === "en") {
    return extensions;
  }

  return extensions.map((extension) => ({
    ...extension,
    ...extension.translations?.[lang],
  }));
};
