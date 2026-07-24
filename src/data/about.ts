import type { Language } from "../i18n/ui";

export type AboutStat = {
  value: string;
  label: string;
};

export type AboutExperience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type AboutSpecialty = {
  eyebrow: string;
  title: string;
  description: string;
  technologies: string[];
};

export type AboutProject = {
  name: string;
  description: string;
};

export type AboutEducation = {
  qualification: string;
  institution: string;
  period: string;
  detail: string;
  highlight?: AboutStat;
};

export type AboutContent = {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    supporting: string;
    snapshotLabel: string;
    snapshotTitle: string;
    snapshotItems: string[];
  };
  workHighlights: AboutStat[];
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    items: AboutExperience[];
    previous: string;
  };
  expertise: {
    eyebrow: string;
    title: string;
    intro: string;
    languagesLabel: string;
    languages: string[];
    specialties: AboutSpecialty[];
  };
  openSource: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: AboutStat[];
    items: AboutProject[];
    cta: string;
  };
  principles: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  education: {
    eyebrow: string;
    title: string;
    items: AboutEducation[];
    languagesTitle: string;
    languages: string[];
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    linksTitle: string;
  };
};

const aboutContent = {
  en: {
    seo: {
      title: "About Sergio – Backend Software Engineer & Applied AI",
      description:
        "Backend-oriented software engineer building internal platforms, REST APIs, developer tools and applied AI solutions from architecture to delivery.",
    },
    hero: {
      eyebrow: "Backend Software Engineer · Applied AI",
      title:
        "I build backend products, developer tools and AI solutions for real-world problems.",
      intro:
        "I’m a software developer who feels most at home in the backend. I’ve worked on internal platforms, REST APIs, microservices, integrations and automation, often taking products from the first requirements through to delivery and maintenance.",
      supporting:
        "I also enjoy building the parts people see, especially when a clear interface can make a complex process much easier for a non-technical team.",
      snapshotLabel: "What I bring",
      snapshotTitle:
        "I like taking an idea from architecture to a product people can actually use.",
      snapshotItems: [
        "Backend systems built to last",
        "AI aimed at concrete product problems",
        "Tools that make day-to-day development easier",
      ],
    },
    workHighlights: [
      {
        value: "3 roles",
        label:
          "across product development, software quality and applied AI R&D",
      },
      {
        value: "End-to-end",
        label:
          "taking internal products from requirements and architecture to deployment and maintenance",
      },
      {
        value: "Backend-first",
        label:
          "building REST APIs, integrations, automation and data-driven tools",
      },
    ],
    experience: {
      eyebrow: "Experience",
      title: "I’ve learned to build software from different angles.",
      intro:
        "Working in QA, product development and R&D has taught me how software is tested, shipped, maintained and improved—not just how it is written.",
      items: [
        {
          company: "Indra",
          role: "Software QA Tester",
          period: "Sep 2025 — Jan 2026",
          highlights: [
            "Validated enterprise software through functional, integration and API testing with Jira, Postman, Selenium and Jenkins.",
            "Investigated and documented incidents, reproduced failures and verified fixes.",
          ],
        },
        {
          company: "Adelsys",
          role: "Software Developer",
          period: "Jan 2024 — Sep 2025",
          highlights: [
            "Owned the full lifecycle of internal solutions: requirements, architecture decisions, development, deployment, support and maintenance.",
            "Built full-stack applications, REST APIs, automation tools and an AI-assisted visual recognition and quality-control system.",
          ],
        },
        {
          company: "Grupo Recreativos Franco",
          role: "Software Developer, R&D",
          period: "Mar 2023 — Nov 2023",
          highlights: [
            "Explored generative AI applications for regulated gaming machines within a small R&D team.",
            "Built real-time person–machine interaction prototypes with LLMs and evaluated technical, hardware and regulatory viability.",
          ],
        },
      ],
      previous:
        "Before moving into software, I worked in industrial environments. That experience gave me a practical approach to diagnostics, precision, organisation and responsibility that I still bring to my work today.",
    },
    expertise: {
      eyebrow: "Technical focus",
      title: "The tools I use to turn ideas into working products.",
      intro:
        "Backend is my starting point, but I’m comfortable moving across data, AI, interfaces and delivery when the product needs it.",
      languagesLabel: "Languages I work with",
      languages: ["TypeScript", "Java", "SQL", "JavaScript", "Python", "C#"],
      specialties: [
        {
          eyebrow: "01",
          title: "Backend & data",
          description:
            "I build services, APIs and relational data models that are straightforward to understand and maintain.",
          technologies: [
            "Node.js",
            "NestJS",
            "Express",
            "Spring Boot",
            "Flask",
            "REST APIs",
            "PostgreSQL",
            "MySQL",
          ],
        },
        {
          eyebrow: "02",
          title: "Architecture & applied AI",
          description:
            "I choose architectures that fit the problem and use AI when it adds something useful to the product.",
          technologies: [
            "Clean architecture",
            "Hexagonal architecture",
            "Microservices",
            "Integrations",
            "LLMs",
            "AI agents & skills",
            "Computer vision",
            "Feasibility analysis",
          ],
        },
        {
          eyebrow: "03",
          title: "Frontend & interfaces",
          description:
            "I create clear interfaces for complex workflows, so users can focus on their work instead of the system behind it.",
          technologies: ["React", "Vue", "Astro", "Tailwind CSS"],
        },
        {
          eyebrow: "04",
          title: "Quality & delivery",
          description:
            "I rely on testing, automation and delivery tooling to make changes safer and easier to operate.",
          technologies: [
            "Docker",
            "Linux",
            "Git/GitHub",
            "CI/CD",
            "Jenkins",
            "SonarQube",
            "JUnit",
            "Selenium",
            "Postman",
          ],
        },
      ],
    },
    openSource: {
      eyebrow: "Open source",
      title: "VS Code tools for everyday development work.",
      intro:
        "My extensions are local-first by design: project knowledge stays in the workspace and useful tools remain close to the code.",
      stats: [
        {
          value: "1,000+",
          label: "combined downloads across my VS Code extensions",
        },
        {
          value: "6",
          label: "extensions published in the portfolio",
        },
      ],
      items: [
        {
          name: "Pinake",
          description:
            "A local-first Markdown documentation manager with search, templates, validation, import/export and Git integration.",
        },
        {
          name: "JustAPI",
          description:
            "A local-first HTTP client with collections, scoped variables, authentication, response history and cURL import—without login, telemetry or cloud storage.",
        },
        {
          name: "Lynvo",
          description:
            "A local-first Kanban board integrated with Git and AI agents, linking workspace tasks to code, history and metrics without a central server.",
        },
      ],
      cta: "Explore all six extensions",
    },
    principles: {
      eyebrow: "How I work",
      title: "Understand first, then build.",
      items: [
        "I start by understanding the problem before choosing the technology.",
        "I prefer clear, maintainable solutions that will still make sense later.",
        "If a workflow repeats or gets in the way, I look for a way to improve it.",
        "I’m comfortable working independently while staying aligned with the team and the business.",
      ],
    },
    education: {
      eyebrow: "Foundation",
      title: "Education & languages",
      items: [
        {
          qualification: "Higher Technician in Web Application Development",
          institution: "CEU FP Madrid",
          period: "2024 — 2026",
          highlight: {
            value: "9.9/10",
            label: "average grade",
          },
          detail:
            "Honours in five modules. My final project focused on this portfolio and VS Code extensions for documentation, APIs, Git and AI-assisted workflows.",
        },
        {
          qualification:
            "Higher Technician in 3D Animation, Games and Interactive Environments",
          institution: "UDIT",
          period: "2021 — 2023",
          detail:
            "Technical training in game and interactive-environment development, including C# and Unity.",
        },
      ],
      languagesTitle: "Communication",
      languages: ["Spanish — native", "English — functional B2"],
    },
    closing: {
      eyebrow: "What I’m looking for",
      title:
        "A team where I can contribute, keep learning and take on more responsibility.",
      body:
        "I’d like to work with people who care about building things well, make space for thoughtful technical decisions and keep improving together. I’m especially interested in meaningful products and international teams where I can continue growing towards senior responsibilities.",
      linksTitle: "Find me online",
    },
  },
  es: {
    seo: {
      title: "Sobre Sergio – Backend Software Engineer e IA aplicada",
      description:
        "Desarrollador de software orientado a backend que crea plataformas internas, APIs REST, herramientas para desarrolladores y soluciones de IA aplicada.",
    },
    hero: {
      eyebrow: "Backend Software Engineer · IA aplicada",
      title:
        "Construyo productos backend, herramientas para desarrolladores y soluciones de IA para problemas reales.",
      intro:
        "Soy desarrollador de software y donde más cómodo me siento es en el backend. He trabajado con plataformas internas, APIs REST, microservicios, integraciones y automatización, muchas veces acompañando el producto desde los primeros requisitos hasta el despliegue y el mantenimiento.",
      supporting:
        "También disfruto construyendo la parte que ve el usuario, sobre todo cuando una interfaz clara puede hacer mucho más sencillo un proceso complejo.",
      snapshotLabel: "Lo que aporto",
      snapshotTitle:
        "Me gusta llevar una idea desde la arquitectura hasta un producto que la gente pueda usar de verdad.",
      snapshotItems: [
        "Sistemas backend pensados para durar",
        "IA enfocada en problemas concretos",
        "Herramientas que hacen más fácil el trabajo diario",
      ],
    },
    workHighlights: [
      {
        value: "3 etapas",
        label:
          "en desarrollo de producto, calidad de software e I+D+i con IA",
      },
      {
        value: "De principio a fin",
        label:
          "desde los requisitos y la arquitectura hasta el despliegue y el mantenimiento",
      },
      {
        value: "Foco backend",
        label:
          "APIs REST, integraciones, automatización y herramientas basadas en datos",
      },
    ],
    experience: {
      eyebrow: "Experiencia",
      title: "He aprendido a construir software desde distintos ángulos.",
      intro:
        "Pasar por calidad, desarrollo de producto e I+D+i me ha enseñado cómo se prueba, se entrega, se mantiene y se mejora el software, no solo cómo se programa.",
      items: [
        {
          company: "Indra",
          role: "QA Tester de Software",
          period: "sep. 2025 — ene. 2026",
          highlights: [
            "Validación de software empresarial mediante pruebas funcionales, de integración y de APIs con Jira, Postman, Selenium y Jenkins.",
            "Investigación y documentación de incidencias, reproducción de fallos y verificación de correcciones.",
          ],
        },
        {
          company: "Adelsys",
          role: "Desarrollador de Software",
          period: "ene. 2024 — sep. 2025",
          highlights: [
            "Responsabilidad sobre el ciclo completo de soluciones internas: requisitos, arquitectura, desarrollo, despliegue, soporte y mantenimiento.",
            "Desarrollo de aplicaciones full-stack, APIs REST, herramientas de automatización y un sistema de reconocimiento visual y control de calidad asistido por IA.",
          ],
        },
        {
          company: "Grupo Recreativos Franco",
          role: "Desarrollador de Software, I+D+i",
          period: "mar. 2023 — nov. 2023",
          highlights: [
            "Investigación de aplicaciones de IA generativa para máquinas de juego bajo restricciones regulatorias dentro de un pequeño equipo de I+D+i.",
            "Prototipos de interacción persona-máquina en tiempo real con LLM y evaluación de la viabilidad técnica, de hardware y regulatoria.",
          ],
        },
      ],
      previous:
        "Antes de dedicarme al software trabajé en entornos industriales. Allí aprendí una forma muy práctica de abordar el diagnóstico, la precisión, la organización y la responsabilidad que todavía aplico en mi día a día.",
    },
    expertise: {
      eyebrow: "Enfoque técnico",
      title:
        "Las herramientas que uso para convertir ideas en productos que funcionan.",
      intro:
        "El backend es mi punto de partida, pero me muevo con comodidad entre datos, IA, interfaces y entrega cuando el producto lo necesita.",
      languagesLabel: "Lenguajes con los que trabajo",
      languages: ["TypeScript", "Java", "SQL", "JavaScript", "Python", "C#"],
      specialties: [
        {
          eyebrow: "01",
          title: "Backend y datos",
          description:
            "Construyo servicios, APIs y modelos relacionales que sean fáciles de entender y mantener.",
          technologies: [
            "Node.js",
            "NestJS",
            "Express",
            "Spring Boot",
            "Flask",
            "APIs REST",
            "PostgreSQL",
            "MySQL",
          ],
        },
        {
          eyebrow: "02",
          title: "Arquitectura e IA aplicada",
          description:
            "Elijo la arquitectura que encaja con el problema y uso IA cuando aporta algo útil al producto.",
          technologies: [
            "Arquitectura limpia",
            "Arquitectura hexagonal",
            "Microservicios",
            "Integraciones",
            "LLM",
            "Agentes y skills de IA",
            "Visión artificial",
            "Análisis de viabilidad",
          ],
        },
        {
          eyebrow: "03",
          title: "Frontend e interfaces",
          description:
            "Creo interfaces claras para flujos complejos, para que el usuario pueda centrarse en su trabajo y no en el sistema que hay detrás.",
          technologies: ["React", "Vue", "Astro", "Tailwind CSS"],
        },
        {
          eyebrow: "04",
          title: "Calidad y entrega",
          description:
            "Me apoyo en pruebas, automatización y herramientas de entrega para que los cambios sean más seguros y fáciles de operar.",
          technologies: [
            "Docker",
            "Linux",
            "Git/GitHub",
            "CI/CD",
            "Jenkins",
            "SonarQube",
            "JUnit",
            "Selenium",
            "Postman",
          ],
        },
      ],
    },
    openSource: {
      eyebrow: "Open source",
      title: "Herramientas de VS Code para el trabajo del día a día.",
      intro:
        "Mis extensiones son local-first por diseño: el conocimiento del proyecto se queda en el workspace y las herramientas están siempre cerca del código.",
      stats: [
        {
          value: "1.000+",
          label: "descargas combinadas en mis extensiones de VS Code",
        },
        {
          value: "6",
          label: "extensiones publicadas en el portfolio",
        },
      ],
      items: [
        {
          name: "Pinake",
          description:
            "Gestor local-first de documentación Markdown con búsqueda, plantillas, validación, importación/exportación e integración con Git.",
        },
        {
          name: "JustAPI",
          description:
            "Cliente HTTP local-first con colecciones, variables por ámbito, autenticación, historial de respuestas e importación cURL; sin login, telemetría ni almacenamiento en la nube.",
        },
        {
          name: "Lynvo",
          description:
            "Kanban local-first integrado con Git y agentes de IA que vincula tareas del workspace con código, historial y métricas sin un servidor central.",
        },
      ],
      cta: "Explorar las seis extensiones",
    },
    principles: {
      eyebrow: "Cómo trabajo",
      title: "Primero entender, después construir.",
      items: [
        "Empiezo por entender bien el problema antes de elegir la tecnología.",
        "Prefiero soluciones claras y mantenibles que sigan teniendo sentido con el tiempo.",
        "Si un flujo se repite o entorpece el trabajo, busco una forma de mejorarlo.",
        "Trabajo con autonomía, pero siempre alineado con el equipo y las necesidades del negocio.",
      ],
    },
    education: {
      eyebrow: "Base",
      title: "Formación e idiomas",
      items: [
        {
          qualification:
            "Técnico Superior en Desarrollo de Aplicaciones Web",
          institution: "CEU FP Madrid",
          period: "2024 — 2026",
          highlight: {
            value: "9,9/10",
            label: "de nota media",
          },
          detail:
            "Cinco matrículas de honor. Mi proyecto final se centró en este portfolio y en extensiones de VS Code para documentación, APIs, Git y flujos asistidos por IA.",
        },
        {
          qualification:
            "Técnico Superior en Animaciones 3D, Juegos y Entornos Interactivos",
          institution: "UDIT",
          period: "2021 — 2023",
          detail:
            "Formación técnica en desarrollo de videojuegos y entornos interactivos, incluyendo C# y Unity.",
        },
      ],
      languagesTitle: "Comunicación",
      languages: ["Español — nativo", "Inglés — B2 funcional"],
    },
    closing: {
      eyebrow: "Qué estoy buscando",
      title:
        "Un equipo donde pueda aportar, seguir aprendiendo y asumir más responsabilidad.",
      body:
        "Me gustaría trabajar con personas que quieran hacer bien las cosas, dejen espacio para tomar decisiones técnicas con criterio y busquen mejorar juntas. Me interesan especialmente los productos con sentido y los equipos internacionales donde pueda seguir creciendo hacia responsabilidades senior.",
      linksTitle: "Encuéntrame online",
    },
  },
} satisfies Record<Language, AboutContent>;

export const getAboutContent = (lang: Language): AboutContent =>
  aboutContent[lang];
