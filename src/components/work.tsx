import Image from "next/image";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { projects } from "@/content/projects";
import { routing } from "@/i18n/routing";

import { ArrowUpRightIcon } from "./icons/arrow-up-right";
import ui from "./ui/ui.module.css";
import styles from "./work.module.css";

type WorkCopy = {
  liveSite: string;
  source: string;
};

function ProjectLinks({
  liveUrl,
  sourceUrl,
  copy,
}: {
  liveUrl?: string;
  sourceUrl?: string;
  copy: WorkCopy;
}) {
  return (
    <div className={styles.links}>
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={ui.textLink}
        >
          {copy.liveSite}
          <ArrowUpRightIcon width={14} height={14} />
        </a>
      ) : null}
      {sourceUrl ? (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={ui.textLink}
        >
          {copy.source}
          <ArrowUpRightIcon width={14} height={14} />
        </a>
      ) : null}
    </div>
  );
}

export async function Work() {
  const [t, locale] = await Promise.all([getTranslations("Work"), getLocale()]);

  const loc = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const hasFeatured = projects.length % 2 === 1;
  const featured = hasFeatured ? projects[0] : undefined;
  const rest = hasFeatured ? projects.slice(1) : projects;
  const copy: WorkCopy = {
    liveSite: t("liveSite"),
    source: t("source"),
  };

  return (
    <section id="work" className={styles.section}>
      <div className={ui.shell}>
        <div className={styles.header}>
          <h2 className={ui.sectionHeading}>{t("heading")}</h2>
        </div>

        {featured ? (
          <article className={styles.featured}>
            <div className={styles.featuredMedia}>
              <Image
                src={featured.image}
                alt={featured.imageAlt[loc]}
                fill
                sizes="(min-width: 900px) 700px, 100vw"
                quality={90}
              />
            </div>

            <div className={styles.featuredBody}>
              <div className={styles.titleRow}>
                <h3 className={styles.featuredTitle}>{featured.name}</h3>
                <span className={ui.meta}>{featured.year}</span>
              </div>

              <p className={styles.summary}>{featured.summary[loc]}</p>

              <ul className={styles.stack}>
                {featured.stack.map((item) => (
                  <li key={item} className={ui.chip}>
                    {item}
                  </li>
                ))}
              </ul>

              <ProjectLinks
                liveUrl={featured.liveUrl}
                sourceUrl={featured.sourceUrl}
                copy={copy}
              />
            </div>
          </article>
        ) : null}

        {rest.length > 0 ? (
          <div className={styles.grid}>
            {rest.map((project) => (
              <article key={project.slug} className={styles.card}>
                <div className={styles.cardMedia}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt[loc]}
                    fill
                    sizes="(min-width: 900px) 540px, 100vw"
                    quality={90}
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.cardTitle}>{project.name}</h3>
                    <span className={ui.meta}>{project.year}</span>
                  </div>

                  <p className={styles.summary}>{project.summary[loc]}</p>

                  <ul className={styles.stack}>
                    {project.stack.map((item) => (
                      <li key={item} className={ui.chip}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ProjectLinks
                    liveUrl={project.liveUrl}
                    sourceUrl={project.sourceUrl}
                    copy={copy}
                  />
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
