export const THEME_COOKIE = "theme";

export type Theme = "light" | "dark";

export function parseTheme(value: string | undefined): Theme {
  if (value === "light" || value === "dark") {
    return value;
  }

  return "dark";
}

export function getNextTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}
