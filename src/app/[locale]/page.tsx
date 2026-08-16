import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <main className="hero">
      <h1 className="hero__name">Eduardo</h1>
      <p className="hero__tagline">{t("tagline")}</p>
    </main>
  );
}
