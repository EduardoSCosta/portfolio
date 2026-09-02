"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import styles from "./locale-switcher.module.css";

const locales = [
  { code: "en" as const, label: "EN" },
  { code: "pt-BR" as const, label: "PT" },
];

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");

  return (
    <nav aria-label={t("label")}>
      <ul className={styles.list}>
        {locales.map(({ code, label }) => (
          <li key={code}>
            <Link
              href={pathname}
              locale={code}
              className={styles.link}
              aria-current={locale === code ? "page" : undefined}
              scroll={false}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
