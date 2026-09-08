import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { education } from "@/content/education";
import { routing } from "@/i18n/routing";

import ui from "./ui/ui.module.css";
import styles from "./education.module.css";

export async function Education() {
  const [t, locale] = await Promise.all([
    getTranslations("Education"),
    getLocale(),
  ]);

  const loc = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  return (
    <section id="education" className={styles.section}>
      <div className={ui.shell}>
        <h2 className={`${ui.sectionHeading} ${styles.heading}`}>
          {t("heading")}
        </h2>

        <ul className={styles.list}>
          {education.map((entry) => (
            <li key={entry.institution.en} className={styles.row}>
              <div className={styles.identity}>
                <h3 className={styles.institution}>{entry.institution[loc]}</h3>
                <span className={styles.degree}>{entry.degree[loc]}</span>
              </div>

              <span className={`${ui.meta} ${styles.dates}`}>
                {entry.start} — {entry.end}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
