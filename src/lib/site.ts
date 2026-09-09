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

export const siteLogo = {
  src: "/logo.png",
  width: 192,
  height: 192,
} as const;

export type ProfileLinkIcon = "github" | "linkedin" | "mail";

export type ProfileLink = {
  label: string;
  href: string;
  icon: ProfileLinkIcon;
  external: boolean;
};

export function readEnv(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export function getContactEmail() {
  return readEnv(process.env.CONTACT_EMAIL);
}

export type ResumeLink = {
  href: string;
  file: boolean;
};

function driveFileId(url: string) {
  const fromPath = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fromPath) {
    return fromPath[1];
  }

  if (
    !/https?:\/\/(?:drive\.google\.com|drive\.usercontent\.google\.com)\//.test(
      url,
    )
  ) {
    return undefined;
  }

  return url.match(/[?&]id=([a-zA-Z0-9_-]+)/)?.[1];
}

export function toResumeHref(url: string) {
  const id = driveFileId(url);
  if (id) {
    return `https://drive.google.com/uc?export=download&id=${id}`;
  }

  return url;
}

export function getResume(locale: Locale): ResumeLink | undefined {
  const value =
    locale === "pt-BR" ? process.env.RESUME_URL_PT : process.env.RESUME_URL_EN;
  const raw = readEnv(value);
  if (!raw) {
    return undefined;
  }

  const href = toResumeHref(raw);
  const file = Boolean(driveFileId(raw)) || /\.pdf(?:[?#]|$)/i.test(href);

  return { href, file };
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

  const email = getContactEmail();
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
