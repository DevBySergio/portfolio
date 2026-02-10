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
    id: "time-tracker",
    name: "Time Tracker",
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
