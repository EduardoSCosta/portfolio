"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLocale } from "next-intl";

import { Button } from "@/components/button";
import { CloseIcon } from "@/components/icons/close";
import { MenuIcon } from "@/components/icons/menu";
import { LocaleSwitch } from "@/components/locale-switch";
import { ThemeSwitch } from "@/components/theme-switch";
import { Link } from "@/i18n/navigation";
import { siteName } from "@/lib/site";

import styles from "./mobile-menu.module.css";

const DESKTOP_MQ = "(min-width: 64rem)";

type MobileMenuLabels = {
  label: string;
  work: string;
  about: string;
  contact: string;
  openMenu: string;
  closeMenu: string;
  menuTitle: string;
};

export function MobileMenu({ labels }: { labels: MobileMenuLabels }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const [menuLocale, setMenuLocale] = useState(locale);

  if (menuLocale !== locale) {
    setMenuLocale(locale);
    setOpen(false);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_MQ);

    function closeIfDesktop() {
      if (media.matches) setOpen(false);
    }

    media.addEventListener("change", closeIfDesktop);
    return () => media.removeEventListener("change", closeIfDesktop);
  }, []);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={dialogId}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
        <span className={styles.srOnly}>{labels.openMenu}</span>
      </button>

      <dialog
        id={dialogId}
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby={titleId}
        closedby="any"
        onClose={close}
      >
        <div className={styles.panel}>
          <h2 id={titleId} className={styles.srOnly}>
            {labels.menuTitle}
          </h2>

          <div className={styles.sheetHeader}>
            <Link href="/" className={styles.brand} onClick={close}>
              {siteName}
            </Link>
            <button type="button" className={styles.close} onClick={close}>
              <CloseIcon />
              <span className={styles.srOnly}>{labels.closeMenu}</span>
            </button>
          </div>

          <nav className={styles.nav} aria-label={labels.label}>
            <a href="#work" className={styles.navLink} onClick={close}>
              {labels.work}
            </a>
            <a href="#about" className={styles.navLink} onClick={close}>
              {labels.about}
            </a>
          </nav>

          <div className={styles.footer}>
            <Button
              href="#contact"
              variant="primary"
              size="compact"
              className={styles.contact}
              onClick={close}
            >
              {labels.contact}
            </Button>
            <div className={styles.controls}>
              <ThemeSwitch />
              <LocaleSwitch />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
