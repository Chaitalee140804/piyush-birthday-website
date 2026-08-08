import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday, Piyush ❤️",
  description: "A little birthday journey made with all my love for Piyush.",
  keywords: ["birthday", "Piyush", "love story", "birthday website"],
  openGraph: {
    title: "Happy Birthday, Piyush ❤️",
    description: "A birthday story made with love.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday, Piyush ❤️",
    description: "A birthday story made with love.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#160b1f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
