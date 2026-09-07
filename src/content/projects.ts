import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

type Localized = Record<Locale, string>;

export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: Localized;
  stack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  image: string;
  imageAlt: Localized;
};

export const projects: Project[] = [
  {
    slug: "sincro",
    name: "Sincro",
    year: "2025",
    summary: {
      en: "Sincro is a system for managing heavy machinery. You register the fleet, record rentals and work orders, track fuel and maintenance, and see cost per hour and profitability for each machine in one dashboard.",
      "pt-BR":
        "O Sincro é um sistema para gestão de máquinas pesadas. Você cadastra a frota, registra locações e ordens de serviço, acompanha combustível e manutenção, e vê custo por hora e rentabilidade de cada máquina no mesmo dashboard.",
    },
    stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Java"],
    liveUrl: "https://sincro.synchsolution.com/",
    image: "/projects/sincro.png",
    imageAlt: {
      en: "Sincro dashboard with fleet KPIs, a bar chart of the most used machines, and a status chart.",
      "pt-BR":
        "Painel do Sincro com indicadores da frota, um gráfico de barras das máquinas mais usadas e um gráfico de status.",
    },
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    year: "2026",
    summary: {
      en: "This site. A personal portfolio in Next.js, in English and Portuguese, with a light theme and a dark theme.",
      "pt-BR":
        "Este site. Um portfólio pessoal em Next.js, em inglês e português, com tema claro e escuro.",
    },
    stack: ["TypeScript", "Next.js", "React"],
    sourceUrl: "https://github.com/EduardoSCosta/portfolio",
    image: "/projects/portfolio.png",
    imageAlt: {
      en: "Hero of this site: name, short intro, and the get in touch and resume buttons.",
      "pt-BR":
        "Hero deste site: nome, uma introdução curta e os botões de contato e currículo.",
    },
  },
];
