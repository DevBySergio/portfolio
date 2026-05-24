import type { ImageMetadata } from "astro";
import fittrackerProImage from "../assets/images/projects/fittracker-pro/image.png";
import fittrackerProOg from "../assets/images/projects/fittracker-pro/og.png";

export type ProjectType = "featured" | "other";
export type PortfolioImage = ImageMetadata | string;

export type ProjectSEO = {
  title?: string;
  description?: string;
  image?: string;
};

type LocalizedProjectFields = Pick<
  Project,
  "title" | "summary" | "description"
> & {
  seo?: ProjectSEO;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  type: "featured" | "other";

  stack: string[];
  image: PortfolioImage;

  client?: string;
  year?: number;

  url?: string;
  github?: string;

  seo?: ProjectSEO;
  translations?: {
    es?: LocalizedProjectFields;
  };
};

export const projects: Project[] = [
  // Los 2 primeros proyectos son los MAIN
  {
    id: "fittracker-pro",
    title: "FitTracker Pro",
    summary:
      "A personal fitness, nutrition and recovery tracker built with Electron.",
    description:
      "A comprehensive desktop application for tracking fitness progress, nutrition, and recovery. Built with Electron, the app provides an all-in-one dashboard with interactive charts powered by Chart.js, including weight trends, strength progression, body measurements, diet adherence, hunger/stress levels, and workout volume.\n\nUsers can log daily metrics such as weight, sleep quality and duration, meal-by-meal diet adherence, water intake, hunger, stress, and energy levels. The workout logger supports custom routines with detailed exercise tracking including sets, reps, weight, RIR, and RPE, alongside automatic 1RM calculation.\n\nWeekly body measurements (waist, chest, arms, thighs, calves, neck, hips) are tracked with visual trend charts. The app stores all data locally in IndexedDB, supports JSON import/export for backup, generates synthetic demo data, and can export reports as PDF. Designed with a clean, responsive UI using Tailwind CSS.",
    type: "featured",

    stack: ["Electron", "JavaScript", "Tailwind CSS", "Chart.js", "IndexedDB"],
    image: fittrackerProImage,

    client: "Personal Trainer",
    year: 2026,
    github: "https://github.com/DevBySergio/RutinaTracker.git",

    seo: {
      title: "FitTracker Pro – Personal Fitness, Nutrition & Recovery Tracker",
      description:
        "A comprehensive desktop application for tracking fitness progress, nutrition, and recovery. Built with Electron, Chart.js, and IndexedDB.",
      image: fittrackerProOg.src,
    },
    translations: {
      es: {
        title: "FitTracker Pro",
        summary: "Un rastreador personal de fitness, nutrición y recuperación.",
        description:
          "Una aplicación de escritorio completa para el seguimiento de progreso fitness, nutrición y recuperación. Construida con Electron, la app ofrece un dashboard interactivo con gráficos realizados con Chart.js que incluyen tendencias de peso, progresión de fuerza, medidas corporales, adherencia a la dieta, niveles de hambre/estrés y volumen de entrenamiento.\n\nLos usuarios pueden registrar métricas diarias como peso, calidad y duración del sueño, adherencia alimenticia por comida, ingesta de agua, hambre, estrés y niveles de energía. El registro de entrenamientos soporta rutinas personalizadas con seguimiento detallado de ejercicios incluyendo series, repeticiones, peso, RIR y RPE, junto con cálculo automático de 1RM.\n\nLas medidas corporales semanales (cintura, pecho, brazos, muslos, pantorrillas, cuello, cadera) se registran con gráficos de tendencia visual. La app almacena todos los datos localmente en IndexedDB, soporta importación/exportación JSON para respaldo, genera datos de demostración sintéticos y puede exportar informes a PDF. Toda la interfaz está en español con un diseño limpio y responsive usando Tailwind CSS.",
        seo: {
          title:
            "FitTracker Pro – Rastreador personal de fitness, nutrición y recuperación",
          description:
            "Una aplicación de escritorio completa para el seguimiento de progreso fitness, nutrición y recuperación. Construida con Electron, Chart.js e IndexedDB.",
          image: fittrackerProOg.src,
        },
      },
    },
  },
  {
    id: "client-project-b",
    title: "Client Project B",
    summary: "Scalable product-oriented web platform.",
    description:
      "A production-ready platform built to handle complex workflows and real-world constraints.",
    type: "featured",

    stack: ["React", "Node.js", "Cloudflare"],
    image: "/images/projects/client-b.png",

    year: 2023,
    translations: {
      es: {
        title: "Proyecto de cliente B",
        summary: "Plataforma web escalable orientada a producto.",
        description:
          "Una plataforma lista para producción, creada para gestionar flujos de trabajo complejos y restricciones reales.",
      },
    },
  },
  // Estos proyectos son los secundarios
  {
    id: "internal-tool",
    title: "Internal Tool",
    summary: "Small internal productivity tool.",
    description:
      "A lightweight internal tool built to automate repetitive tasks and improve team efficiency.",
    type: "other",

    stack: ["TypeScript", "Node.js"],
    image: "/images/projects/internal-tool.png",
    translations: {
      es: {
        title: "Herramienta interna",
        summary: "Pequeña herramienta interna de productividad.",
        description:
          "Una herramienta interna ligera creada para automatizar tareas repetitivas y mejorar la eficiencia del equipo.",
      },
    },
  },
  {
    id: "internal-tool-2",
    title: "Internal Tool 2",
    summary: "Small internal productivity tool.",
    description:
      "A lightweight internal tool built to automate repetitive tasks and improve team efficiency.",
    type: "other",

    stack: ["TypeScript", "Node.js"],
    image: "/images/projects/internal-tool.png",
    translations: {
      es: {
        title: "Herramienta interna 2",
        summary: "Pequeña herramienta interna de productividad.",
        description:
          "Una herramienta interna ligera creada para automatizar tareas repetitivas y mejorar la eficiencia del equipo.",
      },
    },
  },
];

export const getProjects = (lang: "en" | "es" = "en"): Project[] => {
  if (lang === "en") {
    return projects;
  }

  return projects.map((project) => ({
    ...project,
    ...project.translations?.[lang],
    seo: {
      ...project.seo,
      ...project.translations?.[lang]?.seo,
    },
  }));
};
