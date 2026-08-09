import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./gallery.css";
import "./cake.css";
import "./finale.css";
import Navigation from "@/components/navigation/Navigation";
import JourneyControls from "@/components/journey/JourneyControls";

export const metadata: Metadata = {
  title: "Happy Birthday, Piyush ❤️",
  description: "A romantic, anime-inspired birthday journey made with love for Piyush.",
  keywords: ["birthday", "Piyush", "love story", "birthday website", "romantic website"],
  openGraph: {
    title: "Happy Birthday, Piyush ❤️",
    description: "A little birthday story made with love.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday, Piyush ❤️",
    description: "A little birthday story made with love.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#160b1f",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <JourneyControls />
        {children}
      </body>
    </html>
  );
}
