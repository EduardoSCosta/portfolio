import { getTranslations } from "next-intl/server";

import { getContactEmail } from "@/lib/site";

import { ContactForm } from "./contact-form";
import ui from "./ui/ui.module.css";
import styles from "./contact.module.css";

export async function Contact() {
  const t = await getTranslations("Contact");
  const contactEmail = getContactEmail();

  return (
    <section id="contact" className={styles.section}>
      <div className={`${ui.shell} ${styles.layout}`}>
        <div className={styles.intro}>
          <h2 className={ui.sectionHeading}>{t("heading")}</h2>
          <p className={styles.lede}>{t("lede")}</p>

          {contactEmail ? (
            <p className={styles.emailFallback}>
              {t("orEmail")}{" "}
              <a href={`mailto:${contactEmail}`} className={ui.textLink}>
                {contactEmail}
              </a>
            </p>
          ) : null}
        </div>

        <ContactForm contactEmail={contactEmail} />
      </div>
    </section>
  );
}
