export const navSections = [
  { id: "work", messageKey: "work" },
  { id: "experience", messageKey: "experience" },
  { id: "skills", messageKey: "skills" },
  { id: "open-source", messageKey: "openSource" },
  { id: "education", messageKey: "education" },
  { id: "about", messageKey: "about" },
  { id: "contact", messageKey: "contact" },
] as const;

export type NavSection = (typeof navSections)[number];
