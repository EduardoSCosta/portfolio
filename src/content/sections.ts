export const navSections = [
  { id: "work", messageKey: "work" },
  { id: "experience", messageKey: "experience" },
  { id: "open-source", messageKey: "openSource" },
  { id: "skills", messageKey: "skills" },
  { id: "education", messageKey: "education" },
  { id: "about", messageKey: "about" },
  { id: "contact", messageKey: "contact" },
] as const;

export type NavSection = (typeof navSections)[number];
