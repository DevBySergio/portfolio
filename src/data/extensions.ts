export type Extension = {
  id: string;
  name: string;
  description: string;

  marketplaceUrl: string;
  repoUrl?: string;

  icon: string;
  screenshots?: string[];

  tags: string[];
};

export const extensions: Extension[] = [
  {
    id: "dev-tracker",
    name: "DevTracker by Sergio",
    description: "Professional analytics dashboard for developers.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=DevBySergio.DevTrackerBySergio",
    repoUrl: "https://github.com/DevBySergio/DevTracker_by_Sergio",

    icon: "/images/extensions/dev-tracker/icon.png",
    screenshots: [
      "/images/extensions/dev-tracker/1.png",
      "/images/extensions/dev-tracker/2.png",
    ],

    tags: ["VS Code", "Productivity", "TypeScript"],
  },
  {
    id: "time-tracker-02",
    name: "Time Tracker 2",
    description:
      "VS Code extension to track coding time, projects and productivity metrics.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=your-name.time-tracker",
    repoUrl: "https://github.com/your-name/time-tracker",

    icon: "/images/extensions/time-tracker/icon.png",
    screenshots: [
      "/images/extensions/time-tracker/1.png",
      "/images/extensions/time-tracker/2.png",
    ],

    tags: ["VS Code", "Productivity", "TypeScript"],
  },
  {
    id: "time-tracker-03",
    name: "Time Tracker 3",
    description:
      "VS Code extension to track coding time, projects and productivity metrics.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=your-name.time-tracker",
    repoUrl: "https://github.com/your-name/time-tracker",

    icon: "/images/extensions/time-tracker/icon.png",
    screenshots: [
      "/images/extensions/time-tracker/1.png",
      "/images/extensions/time-tracker/2.png",
    ],

    tags: ["VS Code", "Productivity", "TypeScript"],
  },
  {
    id: "time-tracker-04",
    name: "Time Tracker 4",
    description:
      "VS Code extension to track coding time, projects and productivity metrics.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=your-name.time-tracker",
    repoUrl: "https://github.com/your-name/time-tracker",

    icon: "/images/extensions/time-tracker/icon.png",
    screenshots: [
      "/images/extensions/time-tracker/1.png",
      "/images/extensions/time-tracker/2.png",
    ],

    tags: ["VS Code", "Productivity", "TypeScript"],
  },
  {
    id: "time-tracker-05",
    name: "Time Tracker 5",
    description:
      "VS Code extension to track coding time, projects and productivity metrics.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=your-name.time-tracker",
    repoUrl: "https://github.com/your-name/time-tracker",

    icon: "/images/extensions/time-tracker/icon.png",
    screenshots: [
      "/images/extensions/time-tracker/1.png",
      "/images/extensions/time-tracker/2.png",
    ],

    tags: ["VS Code", "Productivity", "TypeScript"],
  },
];
