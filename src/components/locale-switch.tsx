"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import styles from "./locale-switch.module.css";

const locales = [
  { code: "en" as const, label: "EN" },
  { code: "pt-BR" as const, label: "PT" },
];

export function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitch");

  return (
    <nav className={styles.group} aria-label={t("label")}>
      {locales.map(({ code, label }) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          className={styles.option}
          aria-current={locale === code ? "page" : undefined}
          scroll={false}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
