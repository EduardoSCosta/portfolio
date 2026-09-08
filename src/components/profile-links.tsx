import { getTranslations } from "next-intl/server";
import type { ReactNode, SVGProps } from "react";

import { getProfileLinks, type ProfileLinkIcon } from "@/lib/site";

import { GitHubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedin";
import { MailIcon } from "./icons/mail";
import ui from "./ui/ui.module.css";

const profileIcons: Record<
  ProfileLinkIcon,
  (props: SVGProps<SVGSVGElement>) => ReactNode
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
};

type Props = {
  className: string;
};

export async function ProfileLinks({ className }: Props) {
  const t = await getTranslations("About");
  const links = getProfileLinks({ email: t("email") });

  if (links.length === 0) {
    return null;
  }

  return (
    <nav className={className} aria-label={t("linksLabel")}>
      {links.map((link) => {
        const Icon = profileIcons[link.icon];

        return (
          <a
            key={link.icon}
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noreferrer noopener" }
              : {})}
            aria-label={link.label}
            className={ui.iconLink}
          >
            <Icon width={18} height={18} />
          </a>
        );
      })}
    </nav>
  );
}
