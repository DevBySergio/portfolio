import type { ImageMetadata } from "astro";
import betterImagesScreenshot1 from "../assets/images/extensions/betterImages/1.png";
import betterImagesScreenshot2 from "../assets/images/extensions/betterImages/2.png";
import betterImagesIcon from "../assets/images/extensions/betterImages/icon.png";
import devTrackerScreenshot1 from "../assets/images/extensions/dev-tracker/1.png";
import devTrackerScreenshot2 from "../assets/images/extensions/dev-tracker/2.png";
import devTrackerIcon from "../assets/images/extensions/dev-tracker/icon.png";

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
        description:
          "Panel profesional de analítica para desarrolladores.",
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
    id: "time-tracker-03",
    name: "Time Tracker 3",
    description:
      "VS Code extension to track coding time, projects and productivity metrics.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/publishers/DevBySergio",
    repoUrl: "https://github.com/DevBySergio",

    icon: "/images/extensions/time-tracker/icon.png",
    screenshots: [
      "/images/extensions/time-tracker/1.png",
      "/images/extensions/time-tracker/2.png",
    ],

    tags: ["VS Code", "Productivity", "TypeScript"],
    translations: {
      es: {
        description:
          "Extensión de VS Code para medir tiempo de programación, proyectos y métricas de productividad.",
        tags: ["VS Code", "Productividad", "TypeScript"],
      },
    },
  },
  {
    id: "time-tracker-04",
    name: "Time Tracker 4",
    description:
      "VS Code extension to track coding time, projects and productivity metrics.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/publishers/DevBySergio",
    repoUrl: "https://github.com/DevBySergio",

    icon: "/images/extensions/time-tracker/icon.png",
    screenshots: [
      "/images/extensions/time-tracker/1.png",
      "/images/extensions/time-tracker/2.png",
    ],

    tags: ["VS Code", "Productivity", "TypeScript"],
    translations: {
      es: {
        description:
          "Extensión de VS Code para medir tiempo de programación, proyectos y métricas de productividad.",
        tags: ["VS Code", "Productividad", "TypeScript"],
      },
    },
  },
  {
    id: "time-tracker-05",
    name: "Time Tracker 5",
    description:
      "VS Code extension to track coding time, projects and productivity metrics.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/publishers/DevBySergio",
    repoUrl: "https://github.com/DevBySergio",

    icon: "/images/extensions/time-tracker/icon.png",
    screenshots: [
      "/images/extensions/time-tracker/1.png",
      "/images/extensions/time-tracker/2.png",
    ],

    tags: ["VS Code", "Productivity", "TypeScript"],
    translations: {
      es: {
        description:
          "Extensión de VS Code para medir tiempo de programación, proyectos y métricas de productividad.",
        tags: ["VS Code", "Productividad", "TypeScript"],
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
