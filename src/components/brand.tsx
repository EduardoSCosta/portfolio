import Image from "next/image";

import { siteLogo, siteName } from "@/lib/site";

type BrandProps = {
  markClassName?: string;
  priority?: boolean;
};

export function Brand({ markClassName, priority }: BrandProps) {
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
      {siteName}
    </>
  );
}
