import { routing } from "@/i18n/routing";

export const siteName = "Eduardo Souza";

type Locale = (typeof routing.locales)[number];
type Localized = Record<Locale, string>;

export const location: Localized = {
  en: "Anápolis, Brazil",
  "pt-BR": "Anápolis, Brasil",
};

export const profilePhoto = {
  src: "/profile_picture.jpeg",
  width: 1465,
  height: 1465,
} as const;

export type ProfileLinkIcon = "github" | "linkedin" | "mail";

export type ProfileLink = {
  label: string;
  href: string;
  icon: ProfileLinkIcon;
  external: boolean;
};

function readEnv(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export function getProfileLinks(copy: { email: string }): ProfileLink[] {
  const links: ProfileLink[] = [];

  const github = readEnv(process.env.GITHUB_URL);
  if (github) {
    links.push({
      label: "GitHub",
      href: github,
      icon: "github",
      external: true,
    });
  }

  const linkedin = readEnv(process.env.LINKEDIN_URL);
  if (linkedin) {
    links.push({
      label: "LinkedIn",
      href: linkedin,
      icon: "linkedin",
      external: true,
    });
  }

  const email = readEnv(process.env.CONTACT_EMAIL);
  if (email) {
    links.push({
      label: copy.email,
      href: `mailto:${email}`,
      icon: "mail",
      external: false,
    });
  }

  return links;
}
