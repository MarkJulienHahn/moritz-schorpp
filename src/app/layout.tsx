import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moritz Schorpp",
  description:
    "Moritz Schorpp (b. 1994) is a portrait and documentary photographer, currently studying Visual Journalism and Documentary Photography at Hochschule Hanover, Germany.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
