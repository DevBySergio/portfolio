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

    tags: ["VS Code", "Productivity", "Metrics"],
  },
  {
    id: "better-images",
    name: "BetterImages by Sergio",
    description:
      "VS Code extension to edit, process and generate sample images.",
    marketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=DevBySergio.betterimages",
    repoUrl: "https://github.com/DevBySergio/BetterImages_by_Sergio",

    icon: "/images/extensions/betterImages/icon.png",
    screenshots: [
      "/images/extensions/betterImages/1.png",
      "/images/extensions/betterImages/2.png",
    ],

    tags: ["VS Code", "Productivity", "Images"],
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
  },
];
