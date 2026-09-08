import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

type Localized = Record<Locale, string>;

export type SkillGroup = {
  id: "languages" | "frontend" | "backend" | "tools";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    items: ["JavaScript", "TypeScript", "Ruby", "HTML", "CSS"],
  },
  {
    id: "frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "styled-components",
      "Tailwind CSS",
      "TanStack Query",
      "Redux",
    ],
  },
  {
    id: "backend",
    items: ["Node.js", "Rails", "Hotwire", "Sidekiq", "GraphQL"],
  },
  {
    id: "tools",
    items: [
      "Jest",
      "Testing Library",
      "RSpec",
      "Storybook",
      "Docker",
      "Git",
      "GitLab CI",
      "GitHub Actions",
      "Contentful",
    ],
  },
];

export type SpokenLanguage = {
  name: Localized;
  level: Localized;
};

export const spokenLanguages: SpokenLanguage[] = [
  {
    name: { en: "Portuguese", "pt-BR": "Português" },
    level: { en: "Native", "pt-BR": "Nativo" },
  },
  {
    name: { en: "English", "pt-BR": "Inglês" },
    level: { en: "Advanced", "pt-BR": "Avançado" },
  },
];
