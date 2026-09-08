import Image from "next/image";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { location, profilePhoto, siteName } from "@/lib/site";

import { MapPinIcon } from "./icons/map-pin";
import { ProfileLinks } from "./profile-links";
import ui from "./ui/ui.module.css";
import styles from "./about.module.css";

export async function About() {
  const [t, locale] = await Promise.all([
    getTranslations("About"),
    getLocale(),
  ]);

  const loc = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

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
          <ProfileLinks className={styles.links} />
        </div>
      </div>
    </section>
  );
}
