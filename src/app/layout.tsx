import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import "./globals.css";
const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Naphat Chartwanchai — Software Engineer / AI & Data",
    template: "%s — Naphat Chartwanchai",
  },
  description:
    "Thoughtful software. Intelligent systems. Explore the work of Naphat Chartwanchai, a computer engineering student at Chulalongkorn University.",
  applicationName: "Naphat Portfolio",
  openGraph: {
    title: "Naphat Chartwanchai",
    description: "Building intelligent things for the real world.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naphat Chartwanchai",
    description: "Building intelligent things for the real world.",
  },
};
const themeScript = `(function(){try{var t=localStorage.getItem('naphat-theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}})()`;
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
      </body>
    </html>
  );
}
