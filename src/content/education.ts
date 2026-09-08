import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

type Localized = Record<Locale, string>;

export type Degree = {
  institution: Localized;
  degree: Localized;
  start: string;
  end: string;
};

export const education: Degree[] = [
  {
    institution: {
      en: "UniEVANGÉLICA — Evangelical University of Goiás",
      "pt-BR": "UniEVANGÉLICA — Universidade Evangélica de Goiás",
    },
    degree: {
      en: "Bachelor of Computer Engineering",
      "pt-BR": "Bacharelado em Engenharia de Computação",
    },
    start: "2016",
    end: "2020",
  },
];
