import Image from "next/image";

import { siteLogo, siteName } from "@/lib/site";

type BrandProps = {
  markClassName?: string;
  nameClassName?: string;
  priority?: boolean;
};

export function Brand({ markClassName, nameClassName, priority }: BrandProps) {
  return (
    <>
      <Image
        src={siteLogo.src}
        alt=""
        width={siteLogo.width}
        height={siteLogo.height}
        className={markClassName}
        unoptimized
        priority={priority}
      />
      <span className={nameClassName}>{siteName}</span>
    </>
  );
}
