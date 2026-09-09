import { getTranslations } from "next-intl/server";

import { LocaleSwitch } from "@/components/locale-switch";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import ui from "@/components/ui/ui.module.css";
import { barSections, navSections } from "@/content/sections";
import { Link } from "@/i18n/navigation";
import { siteName } from "@/lib/site";

import styles from "./navbar.module.css";

const menuSections = navSections.filter((section) => section.id !== "contact");

export async function Navbar() {
  const t = await getTranslations("Nav");

  return (
    <header className={styles.header}>
      <div className={`${ui.shell} ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          {siteName}
        </Link>

        <nav className={styles.sections} aria-label={t("label")}>
          {barSections.map(({ id, messageKey }) => (
            <a key={id} href={`#${id}`} className={styles.sectionLink}>
              {t(messageKey)}
            </a>
          ))}
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
              sections: menuSections.map(({ id, messageKey }) => ({
                href: `#${id}`,
                label: t(messageKey),
              })),
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
