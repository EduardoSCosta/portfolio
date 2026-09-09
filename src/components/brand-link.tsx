"use client";

import type { ComponentProps, MouseEvent } from "react";

import { Link, usePathname } from "@/i18n/navigation";

type BrandLinkProps = Pick<
  ComponentProps<typeof Link>,
  "className" | "children" | "onClick"
>;

function isModifiedClick(event: MouseEvent) {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

function scrollToTop() {
  window.scrollTo({ top: 0 });

  if (window.location.hash) {
    history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  }
}

export function BrandLink({ className, children, onClick }: BrandLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || isModifiedClick(event)) return;
        if (pathname !== "/") return;

        event.preventDefault();
        scrollToTop();
      }}
    >
      {children}
    </Link>
  );
}
