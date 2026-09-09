import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

type Localized = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type Role = {
  company: string;
  title: Localized;
  description?: Localized;
  start: string;
  end?: string;
  highlights: LocalizedList;
};

export const roles: Role[] = [
  {
    company: "SynchSolution",
    title: {
      en: "Co-Founder & Front-end Software Engineer",
      "pt-BR": "Cofundador e Engenheiro de Software Front-end",
    },
    description: {
      en: "Co-founder. Built the front-end of Sincro, a multi-tenant SaaS for managing heavy machinery rentals and operations.",
      "pt-BR":
        "Cofundador. Construí o front-end do Sincro, um SaaS multi-tenant para gestão de locação e operação de máquinas pesadas.",
    },
    start: "2025-06",
    highlights: {
      en: [
        "Designed the front-end architecture in TypeScript, React, and Next.js (App Router), using Tailwind CSS and shadcn/ui. I decided the module structure, how server actions called the API, and how routes were gated by permission.",
        "Implemented JWT login, encrypted session cookies, and automatic token refresh on protected routes.",
        "Added authorization so each page and mutation checks a permission. Tenant users only see their own company.",
        "Built the screens for fleet, rentals, work orders, fuel, maintenance, clients, and operators. Forms are validated with Zod. Tables use TanStack Table. Records can be imported from spreadsheets. Operational reports download as PDF (15 report types).",
      ],
      "pt-BR": [
        "Desenhei a arquitetura front-end em TypeScript, React e Next.js (App Router), com Tailwind CSS e shadcn/ui. Decidi a estrutura de módulos, como as server actions chamavam a API e como as rotas eram protegidas por permissão.",
        "Implementei login com JWT, cookies de sessão criptografados e renovação automática do token nas rotas protegidas.",
        "Adicionei autorização para que cada página e cada ação verifique uma permissão. Usuários de uma empresa só veem a própria empresa.",
        "Criei as telas de frota, locações, ordens de serviço, combustível, manutenção, clientes e operadores. Formulários validados com Zod. Tabelas com TanStack Table. Cadastros podem ser importados de planilhas. Relatórios operacionais em PDF (15 tipos).",
      ],
    },
  },
  {
    company: "Codeminer42",
    title: {
      en: "Software Engineer",
      "pt-BR": "Engenheiro de Software",
    },
    start: "2022-01",
    end: "2025-04",
    highlights: {
      en: [
        "Maintained and extended Codeminer42's internal employee management application in Ruby on Rails used company-wide.",
        "Rebuilt the platform's interface with Hotwire and Tailwind CSS.",
        "Mentored 3 trainees. I guided their study plans, set technical challenges, and reviewed their pull requests.",
        "Ran internal workshops on front-end, React Native, and contributing to open source projects.",
        "Started in the trainee program, learning JavaScript, TypeScript, React, and Rails alongside SOLID, design patterns, and automated testing.",
      ],
      "pt-BR": [
        "Mantive e evoluí o sistema interno de gestão de funcionários da Codeminer42 em Ruby on Rails, usado por toda a empresa.",
        "Reconstruí a interface da plataforma com Hotwire e Tailwind CSS.",
        "Mentorei 3 trainees. Orientei os planos de estudo, propus desafios técnicos e revisei os pull requests.",
        "Ministrei workshops internos sobre front-end, React Native e contribuição para projetos open source.",
        "Comecei no programa de trainee, aprendendo JavaScript, TypeScript, React e Rails, além de SOLID, design patterns e testes automatizados.",
      ],
    },
  },
  {
    company: "Amazon (eero)",
    title: {
      en: "Front-end Software Engineer",
      "pt-BR": "Engenheiro de Software Front-end",
    },
    description: {
      en: "Contracted through Codeminer42 to eero, an Amazon company.",
      "pt-BR": "Alocado pela Codeminer42 na eero, uma empresa da Amazon.",
    },
    start: "2024-06",
    end: "2025-04",
    highlights: {
      en: [
        "Built and maintained features for the eero website in TypeScript, React, Next.js, and styled-components.",
        "Refactored part of the application to adopt Server-Side Rendering (SSR), which cut page load time by 20% and lifted SEO scores.",
        "Made the app usable with screen readers and keyboard navigation through semantic HTML and ARIA roles, bringing it to WCAG AA compliance.",
        "Built reusable responsive components, several of them animated with CSS and Framer Motion.",
        "Integrated Contentful so non-technical teammates could update site content themselves instead of filing a dev ticket.",
        "Rebuilt the site navbar to work across screen sizes and with assistive technology.",
      ],
      "pt-BR": [
        "Desenvolvi e mantive funcionalidades do site da eero com TypeScript, React, Next.js e styled-components.",
        "Refatorei parte da aplicação para adotar Server-Side Rendering (SSR), o que reduziu o tempo de carregamento das páginas em 20% e melhorou a pontuação de SEO.",
        "Tornei a aplicação utilizável com leitores de tela e navegação por teclado, com HTML semântico e ARIA roles, e levei o site à conformidade com o WCAG AA.",
        "Criei componentes responsivos e reutilizáveis, vários deles animados com CSS e Framer Motion.",
        "Integrei o Contentful para que colegas de times não técnicos pudessem atualizar o conteúdo do site sem abrir um chamado para o time de desenvolvimento.",
        "Reconstruí a barra de navegação do site para funcionar em diferentes tamanhos de tela e com tecnologias assistivas.",
      ],
    },
  },
  {
    company: "Ideal CTVM",
    title: {
      en: "Front-end Software Engineer",
      "pt-BR": "Engenheiro de Software Front-end",
    },
    description: {
      en: "6-month client engagement through Codeminer42.",
      "pt-BR": "Projeto de 6 meses pela Codeminer42.",
    },
    start: "2023-12",
    end: "2024-05",
    highlights: {
      en: [
        "Designed the front-end architecture of an investment platform built in TypeScript, React, Next.js, and Tailwind CSS. I chose the rendering strategy, the module structure, where state lived, and how the app handled protected routes.",
        "Built responsive, reusable components that hold up from phone to desktop.",
        "Added user authentication with Auth.js and Amazon Cognito.",
        "Set up role-based authorization so each user type only reached the data and actions their role allowed.",
        "Connected the front-end to back-end APIs with Fetch API and TanStack Query, which handled caching and kept server state in sync.",
      ],
      "pt-BR": [
        "Projetei a arquitetura do front-end de uma plataforma de investimentos em TypeScript, React, Next.js e Tailwind CSS. Escolhi a estratégia de renderização, a estrutura dos módulos, onde ficava o estado e como a aplicação lidava com rotas protegidas.",
        "Criei componentes responsivos e reutilizáveis, que funcionam do celular ao desktop.",
        "Adicionei autenticação de usuários com Auth.js e Amazon Cognito.",
        "Configurei autorização por perfil, para que cada tipo de usuário acessasse só os dados e as ações permitidos para o seu papel.",
        "Conectei o front-end às APIs de back-end com Fetch API e TanStack Query, que faziam o cache e mantinham o estado do servidor sincronizado.",
      ],
    },
  },
  {
    company: "CRMBonus",
    title: {
      en: "Software Engineer",
      "pt-BR": "Engenheiro de Software",
    },
    description: {
      en: "7-month client engagement through Codeminer42.",
      "pt-BR": "Projeto de 7 meses pela Codeminer42.",
    },
    start: "2023-04",
    end: "2023-10",
    highlights: {
      en: [
        "Rebuilt a restaurant reservation and discount mobile app in React Native.",
        "Shipped Deeplink support so a shared link opens the restaurant page directly instead of dropping the user on the home screen.",
        "Added Google Sign-In as an authentication option.",
      ],
      "pt-BR": [
        "Refiz um aplicativo mobile de reservas e descontos em restaurantes, em React Native.",
        "Implementei suporte a Deeplink para que um link compartilhado abrisse direto na página do restaurante, em vez de jogar o usuário na tela inicial.",
        "Adicionei Google Sign-In como opção de autenticação.",
      ],
    },
  },
  {
    company: "IGT International Coaching",
    title: {
      en: "Software Engineer",
      "pt-BR": "Engenheiro de Software",
    },
    description: {
      en: "3-month client engagement through Codeminer42.",
      "pt-BR": "Projeto de 3 meses pela Codeminer42.",
    },
    start: "2022-11",
    end: "2023-01",
    highlights: {
      en: [
        "Built a Ruby on Rails application for managing subscribers to online courses.",
        "Added authentication with Devise and admin pages with ActiveAdmin.",
        "Integrated the Hotmart sales API so course purchases registered subscribers automatically.",
        "Integrated the Circle API so community access was granted and revoked without manual work.",
        "Wrote unit and integration tests in RSpec, reaching 95% coverage on the core subscriber flows.",
      ],
      "pt-BR": [
        "Desenvolvi uma aplicação em Ruby on Rails para gestão de inscritos em cursos online.",
        "Adicionei autenticação com Devise e páginas de administração com ActiveAdmin.",
        "Integrei a API de vendas da Hotmart para que a compra de um curso registrasse o inscrito automaticamente.",
        "Integrei a API da Circle para conceder e revogar o acesso às comunidades sem trabalho manual.",
        "Escrevi testes de unidade e de integração com RSpec, com 95% de cobertura nos fluxos principais de inscritos.",
      ],
    },
  },
];
