import type { SVGProps } from "react";

export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 2.75v7.5" />
      <path d="M5 7.5 8 10.5l3-3" />
      <path d="M3 12.25h10" />
    </svg>
  );
}
