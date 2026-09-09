"use client";

import { useActionState, useId, useState } from "react";
import { useTranslations } from "next-intl";

import { submitContact } from "@/app/actions";
import { AlertIcon } from "@/components/icons/alert";
import { CheckIcon } from "@/components/icons/check";
import { SendIcon } from "@/components/icons/send";
import { SpinnerIcon } from "@/components/icons/spinner";
import { Button } from "@/components/ui/button";
import { initialContactState } from "@/lib/contact";

import { Field, type FieldChange } from "./field";
import ui from "./ui/ui.module.css";
import styles from "./contact.module.css";

type Props = {
  contactEmail?: string;
};

export function ContactForm({ contactEmail }: Props) {
  const t = useTranslations("Contact");
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactState,
  );
  const id = useId();
  const [fields, setFields] = useState({
    name: state.values?.name ?? "",
    email: state.values?.email ?? "",
    message: state.values?.message ?? "",
  });

  if (state.status === "success") {
    return (
      <div className={styles.card}>
        <div className={styles.success} role="status">
          <span className={styles.successBadge}>
            <CheckIcon width={16} height={16} />
          </span>
          <p className={styles.successTitle}>{t("successTitle")}</p>
          <p className={styles.successBody}>{t("successBody")}</p>
        </div>
      </div>
    );
  }

  const formErrorCopy = state.formError
    ? t(`errors.${state.formError}`)
    : null;

  function handleChange(event: FieldChange) {
    const { name, value } = event.target;
    setFields((current) => ({ ...current, [name]: value }));
  }

  return (
    <div className={styles.card}>
      <form action={formAction} className={styles.form} noValidate>
        <Field
          id={`${id}-name`}
          name="name"
          label={t("nameLabel")}
          placeholder={t("namePlaceholder")}
          autoComplete="name"
          value={fields.name}
          invalid={Boolean(state.fieldErrors.name)}
          error={t("errors.name")}
          onChange={handleChange}
        />
        <Field
          id={`${id}-email`}
          name="email"
          type="email"
          label={t("emailLabel")}
          placeholder={t("emailPlaceholder")}
          autoComplete="email"
          value={fields.email}
          invalid={Boolean(state.fieldErrors.email)}
          error={t("errors.email")}
          onChange={handleChange}
        />
        <Field
          id={`${id}-message`}
          name="message"
          multiline
          label={t("messageLabel")}
          placeholder={t("messagePlaceholder")}
          value={fields.message}
          invalid={Boolean(state.fieldErrors.message)}
          error={t("errors.message")}
          onChange={handleChange}
        />

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor={`${id}-company`}>Company</label>
          <input
            id={`${id}-company`}
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {formErrorCopy ? (
          <p className={`${styles.notice} ${styles.noticeError}`} role="alert">
            <span className={styles.noticeIcon}>
              <AlertIcon width={15} height={15} />
            </span>
            <span>
              {formErrorCopy}
              {contactEmail ? (
                <>
                  {" "}
                  <a href={`mailto:${contactEmail}`} className={ui.textLink}>
                    {contactEmail}
                  </a>
                </>
              ) : null}
            </span>
          </p>
        ) : null}

        <Button
          type="submit"
          variant="primary"
          className={styles.submit}
          disabled={pending}
        >
          {pending ? (
            <>
              <SpinnerIcon width={16} height={16} className={styles.spin} />
              {t("submitting")}
            </>
          ) : (
            <>
              <SendIcon width={16} height={16} />
              {t("submit")}
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
