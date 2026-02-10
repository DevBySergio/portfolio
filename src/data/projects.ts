export type ProjectType = "featured" | "other";

export type ProjectSEO = {
  title?: string;
  description?: string;
  image?: string;
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
};

export const projects: Project[] = [
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
  },
  {
    id: "internal-tool",
    title: "Internal Tool",
    summary: "Small internal productivity tool.",
    description:
      "A lightweight internal tool built to automate repetitive tasks and improve team efficiency.",
    type: "other",

    stack: ["TypeScript", "Node.js"],
    image: "/images/projects/internal-tool.png",
  },
];
