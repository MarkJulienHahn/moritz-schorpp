import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moritz Schorpp",
  description:
    "Moritz Schorpp is a photographer based in Hanover (GER) and Freiburg (GER) focusing on portrait and documentary practices.",
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
