import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { location, siteName } from "@/lib/site";

const geistMedium = readFile(
  join(process.cwd(), "src/fonts/geist-sans-latin-500-normal.ttf"),
);
const geistSemiBold = readFile(
  join(process.cwd(), "src/fonts/geist-sans-latin-600-normal.ttf"),
);
const photo = readFile(
  join(process.cwd(), "public/profile_picture.jpeg"),
);

export const alt = siteName;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  const [t, geistMediumData, geistSemiBoldData, photoData] = await Promise.all([
    getTranslations({ locale: loc, namespace: "Hero" }),
    geistMedium,
    geistSemiBold,
    photo,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#08090a",
          backgroundImage:
            "radial-gradient(circle at 78% 48%, rgba(194, 65, 12, 0.28), transparent 58%)",
          color: "#edeef0",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 680,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: "-2.5px",
              lineHeight: 1.05,
            }}
          >
            {siteName}
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.3,
              color: "#9ca1aa",
            }}
          >
            {t("subhead")}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 24,
              fontWeight: 500,
              color: "#8a8f98",
            }}
          >
            {location[loc]}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: 5,
            backgroundColor: "#c2410c",
            borderRadius: 9999,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 280,
              height: 280,
              borderRadius: 9999,
              overflow: "hidden",
            }}
          >
            <img
              src={`data:image/jpeg;base64,${photoData.toString("base64")}`}
              width={280}
              height={280}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistMediumData,
          weight: 500,
          style: "normal",
        },
        {
          name: "Geist",
          data: geistSemiBoldData,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
