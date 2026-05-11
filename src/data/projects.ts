export type ProjectType = "featured" | "other";

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
  image: string;

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
    id: "client-project-a",
    title: "Client Project A",
    summary: "Full-stack web application for a real client.",
    description: "A scalable full-stack solution built for a real client...",
    type: "featured",

    stack: ["Astro", "React", "Node.js"],
    image: "/images/projects/client-a.png",

    seo: {
      title: "Client Project A – Full-stack Web Application",
      description:
        "Case study of a real-world full-stack application focused on performance and scalability.",
      image: "/images/projects/client-a-og.png",
    },
    translations: {
      es: {
        title: "Proyecto de cliente A",
        summary: "Aplicación web full-stack para un cliente real.",
        description:
          "Una solución full-stack escalable creada para un cliente real...",
        seo: {
          title: "Proyecto de cliente A – Aplicación web full-stack",
          description:
            "Caso de estudio de una aplicación full-stack real centrada en rendimiento y escalabilidad.",
          image: "/images/projects/client-a-og.png",
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
