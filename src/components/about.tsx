import Image from "next/image";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReactNode, SVGProps } from "react";

import { routing } from "@/i18n/routing";
import {
  getProfileLinks,
  location,
  profilePhoto,
  siteName,
  type ProfileLinkIcon,
} from "@/lib/site";

import { GitHubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedin";
import { MailIcon } from "./icons/mail";
import { MapPinIcon } from "./icons/map-pin";
import ui from "./ui/ui.module.css";
import styles from "./about.module.css";

const profileIcons: Record<
  ProfileLinkIcon,
  (props: SVGProps<SVGSVGElement>) => ReactNode
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
};

export async function About() {
  const [t, locale] = await Promise.all([
    getTranslations("About"),
    getLocale(),
  ]);

  const loc = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  const links = getProfileLinks({ email: t("email") });

  return (
    <section id="about" className={styles.section}>
      <div className={ui.shell}>
        <h2 className={`${ui.sectionHeading} ${styles.heading}`}>
          {t("heading")}
        </h2>

        <div className={styles.identity}>
          <div className={styles.avatar}>
            <Image
              src={profilePhoto.src}
              alt={t("photoAlt")}
              width={profilePhoto.width}
              height={profilePhoto.height}
              sizes="88px"
              quality={90}
            />
          </div>

          <div className={styles.identityText}>
            <h3 className={styles.name}>{siteName}</h3>
            <p className={styles.role}>{t("role")}</p>
            <p className={`${ui.meta} ${styles.location}`}>
              <MapPinIcon width={14} height={14} />
              {location[loc]}
            </p>
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.bio}>{t("bio")}</p>
          {links.length > 0 ? (
            <nav className={styles.links} aria-label={t("linksLabel")}>
              {links.map((link) => {
                const Icon = profileIcons[link.icon];

                return (
                  <a
                    key={link.icon}
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    aria-label={link.label}
                    className={ui.iconLink}
                  >
                    <Icon width={18} height={18} />
                  </a>
                );
              })}
            </nav>
          ) : null}
        </div>
      </div>
    </section>
  );
}
