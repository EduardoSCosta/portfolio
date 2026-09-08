import type { SVGProps } from "react";

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.63 0H2.37C1.06 0 0 1.03 0 2.31v11.38C0 14.97 1.06 16 2.37 16h11.26c1.31 0 2.37-1.03 2.37-2.31V2.31C16 1.03 14.94 0 13.63 0ZM4.85 13.32H2.68V6.24h2.17v7.08ZM3.76 5.27a1.26 1.26 0 1 1 0-2.52 1.26 1.26 0 0 1 0 2.52Zm9.57 8.05h-2.17V9.87c0-.82-.01-1.87-1.14-1.87-1.14 0-1.32.89-1.32 1.81v3.51H6.54V6.24h2.08v.97h.03c.29-.55 1-1.13 2.05-1.13 2.19 0 2.6 1.44 2.6 3.32v3.92Z" />
    </svg>
  );
}
