import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <main className={styles.hero}>
      <h1 className={styles.name}>Eduardo</h1>
      <p className={styles.tagline}>{t("tagline")}</p>
    </main>
  );
}
