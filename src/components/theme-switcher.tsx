"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { MoonIcon } from "@/components/icons/moon";
import { SunIcon } from "@/components/icons/sun";
import styles from "./theme-switcher.module.css";

export function ThemeSwitcher() {
  const t = useTranslations("ThemeSwitcher");
  const { theme, setTheme } = useTheme();

  function handleToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button type="button" className={styles.root} onClick={handleToggle}>
      <SunIcon
        className={`${styles.icon} ${styles.iconSun}`}
        width={18}
        height={18}
      />
      <MoonIcon
        className={`${styles.icon} ${styles.iconMoon}`}
        width={18}
        height={18}
      />
      <span className={`${styles.srOnly} ${styles.labelSun}`}>
        {t("switchToLight")}
      </span>
      <span className={`${styles.srOnly} ${styles.labelMoon}`}>
        {t("switchToDark")}
      </span>
    </button>
  );
}
