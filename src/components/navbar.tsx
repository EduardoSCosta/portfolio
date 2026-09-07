import { getTranslations } from "next-intl/server";

import { Button } from "@/components/button";
import { LocaleSwitch } from "@/components/locale-switch";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeSwitch } from "@/components/theme-switch";
import { Link } from "@/i18n/navigation";
import { siteName } from "@/lib/site";

import styles from "./navbar.module.css";

export async function Navbar() {
  const t = await getTranslations("Nav");

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          {siteName}
        </Link>

        <nav className={styles.sections} aria-label={t("label")}>
          <a href="#work" className={styles.sectionLink}>
            {t("work")}
          </a>
          <a href="#about" className={styles.sectionLink}>
            {t("about")}
          </a>
        </nav>

        <div className={styles.actions}>
          <div className={styles.controls}>
            <ThemeSwitch />
            <LocaleSwitch />
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="compact"
            className={styles.contact}
          >
            {t("contact")}
          </Button>
          <MobileMenu
            labels={{
              label: t("label"),
              work: t("work"),
              about: t("about"),
              contact: t("contact"),
              openMenu: t("openMenu"),
              closeMenu: t("closeMenu"),
              menuTitle: t("menuTitle"),
            }}
          />
        </div>
      </div>
    </header>
  );
}
