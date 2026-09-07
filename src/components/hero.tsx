import { getTranslations } from "next-intl/server";

import { ChevronDownIcon } from "@/components/icons/chevron-down";
import { DownloadIcon } from "@/components/icons/download";
import { Button } from "@/components/ui/button";
import ui from "@/components/ui/ui.module.css";
import { siteName } from "@/lib/site";

import styles from "./hero.module.css";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className={styles.hero}>
      <div className={`${ui.shell} ${styles.inner}`}>
        <h1 className={styles.headline}>{siteName}</h1>
        <p className={styles.subhead}>{t("subhead")}</p>
        <p className={styles.lede}>{t("lede")}</p>

        <div className={styles.actions}>
          <Button variant="primary">{t("primaryCta")}</Button>
          <Button variant="ghost">
            <DownloadIcon width={16} height={16} />
            {t("secondaryCta")}
          </Button>
        </div>
      </div>

      <a href="#work" className={styles.scrollCue}>
        {t("scrollCue")}
        <ChevronDownIcon width={14} height={14} />
      </a>
    </section>
  );
}
