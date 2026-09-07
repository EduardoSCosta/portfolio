import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { roles } from "@/content/roles";
import { routing } from "@/i18n/routing";

import ui from "./ui/ui.module.css";
import styles from "./experience.module.css";

function formatMonth(value: string, months: string[]) {
  const [year, month] = value.split("-");
  if (!month) return year;
  return `${months[Number(month) - 1]} ${year}`;
}

export async function Experience() {
  const [t, locale] = await Promise.all([
    getTranslations("Experience"),
    getLocale(),
  ]);

  const loc = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const months = t.raw("months") as string[];

  return (
    <section id="experience" className={styles.section}>
      <div className={ui.shell}>
        <h2 className={`${ui.sectionHeading} ${styles.heading}`}>
          {t("heading")}
        </h2>

        <ul className={styles.list}>
          {roles.map((role, index) => (
            <li key={`${role.company}-${index}`} className={styles.row}>
              <div className={styles.identity}>
                <h3 className={styles.company}>{role.company}</h3>
                <span className={styles.role}>{role.title[loc]}</span>
                {role.description ? (
                  <span className={styles.description}>
                    {role.description[loc]}
                  </span>
                ) : null}

                <ul className={styles.highlights}>
                  {role.highlights[loc].map((highlight) => (
                    <li key={highlight} className={styles.highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <span className={`${ui.meta} ${styles.dates}`}>
                {formatMonth(role.start, months)} —{" "}
                {role.end ? formatMonth(role.end, months) : t("present")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
