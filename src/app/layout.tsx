import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eduardo Souza | Full Stack Software Engineer",
  description: "Eduardo's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
