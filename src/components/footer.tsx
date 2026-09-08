import { getTranslations } from "next-intl/server";

import { ProfileLinks } from "@/components/profile-links";
import ui from "@/components/ui/ui.module.css";
import { siteName } from "@/lib/site";

import styles from "./footer.module.css";

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={`${ui.shell} ${styles.inner}`}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {siteName}. {t("rights")}
        </p>

        <ProfileLinks className={styles.social} />
      </div>
    </footer>
  );
}
