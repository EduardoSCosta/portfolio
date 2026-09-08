import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { skillGroups, spokenLanguages } from "@/content/skills";
import { routing } from "@/i18n/routing";

import ui from "./ui/ui.module.css";
import styles from "./skills.module.css";

export async function Skills() {
  const [t, locale] = await Promise.all([
    getTranslations("Skills"),
    getLocale(),
  ]);

  const loc = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  return (
    <section id="skills" className={styles.section}>
      <div className={ui.shell}>
        <h2 className={`${ui.sectionHeading} ${styles.heading}`}>
          {t("heading")}
        </h2>

        <dl className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.id} className={styles.row}>
              <dt className={`${ui.meta} ${styles.label}`}>
                {t(`groups.${group.id}`)}
              </dt>
              <dd>
                <ul className={styles.items}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}

          <div className={styles.row}>
            <dt className={`${ui.meta} ${styles.label}`}>{t("spokenLabel")}</dt>
            <dd>
              <ul className={styles.items}>
                {spokenLanguages.map((language) => (
                  <li key={language.name.en} className={styles.item}>
                    {language.name[loc]}:
                    <span className={styles.level}>{language.level[loc]}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
