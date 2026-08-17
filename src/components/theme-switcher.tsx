"use client";

import { useTranslations } from "next-intl";
import { startTransition, useState } from "react";
import { MoonIcon } from "@/components/icons/moon";
import { SunIcon } from "@/components/icons/sun";
import { setTheme } from "@/lib/theme-actions";
import { getNextTheme, type Theme } from "@/lib/theme";

export function ThemeSwitcher({ theme: initialTheme }: { theme: Theme }) {
  const t = useTranslations("ThemeSwitcher");
  const [theme, setThemeState] = useState(initialTheme);

  function handleToggle() {
    const next = getNextTheme(theme);

    document.documentElement.dataset.theme = next;
    setThemeState(next);

    startTransition(() => {
      void setTheme(next);
    });
  }

  const label = theme === "dark" ? t("switchToLight") : t("switchToDark");

  return (
    <button
      type="button"
      className="theme-switcher"
      onClick={handleToggle}
      aria-label={label}
    >
      <SunIcon
        className="theme-switcher__icon theme-switcher__icon--sun"
        width={18}
        height={18}
      />
      <MoonIcon
        className="theme-switcher__icon theme-switcher__icon--moon"
        width={18}
        height={18}
      />
    </button>
  );
}
