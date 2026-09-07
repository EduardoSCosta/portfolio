import { getTranslations } from "next-intl/server";

import { openSource } from "@/content/open-source";

import { ArrowUpRightIcon } from "./icons/arrow-up-right";
import ui from "./ui/ui.module.css";
import styles from "./open-source.module.css";

const CLOSED_PRS_BY_AUTHOR =
  "/pulls?q=is%3Apr+is%3Aclosed+author%3AEduardoSCosta";

function repoPath(href: string) {
  return new URL(href).pathname.replace(/^\//, "");
}

function contributionsUrl(href: string) {
  return `${href.replace(/\/$/, "")}${CLOSED_PRS_BY_AUTHOR}`;
}

export async function OpenSource() {
  const t = await getTranslations("OpenSource");

  return (
    <section id="open-source" className={styles.section}>
      <div className={ui.shell}>
        <h2 className={`${ui.sectionHeading} ${styles.heading}`}>
          {t("heading")}
        </h2>

        <ul className={styles.list}>
          {openSource.map((project) => (
            <li key={project.name}>
              <a
                href={contributionsUrl(project.href)}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.row}
              >
                <span className={styles.name}>{project.name}</span>

                <span className={styles.destination}>
                  <span className={`${ui.meta} ${styles.repo}`}>
                    {repoPath(project.href)}
                  </span>
                  <ArrowUpRightIcon width={14} height={14} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
