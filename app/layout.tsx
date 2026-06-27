import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/lib/jsonld";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Short, keyword-led title for the browser/search-result tab (~54 chars — avoids truncation).
const TITLE = "AI Speed-to-Lead for Local Service Businesses | Tyvelo";
// Longer, benefit-led title for social shares (OG/Twitter aren't length-capped).
const SOCIAL_TITLE =
  "Tyvelo — Every Lead, Answered in 60 Seconds. AI Speed-to-Lead for Local Service Businesses.";
const DESCRIPTION =
  "Instant lead response and follow-up for local service businesses in Greater Vancouver. See a free demo built for your business — no call required.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — Tyvelo" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Tyvelo",
    url: "/",
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo/logo_white.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[1000] focus:rounded-br-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:font-mono focus:text-xs focus:font-semibold focus:text-[#07080B]"
        >
          Skip to content
        </a>

        {/* Background decor */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)",
              backgroundSize: "62px 62px",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 55% at 50% -5%, #000 25%, transparent 72%)",
              maskImage:
                "radial-gradient(ellipse 75% 55% at 50% -5%, #000 25%, transparent 72%)",
            }}
          />
          <div className="absolute -left-40 -top-56 h-[640px] w-[640px] animate-drift1 rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.22),transparent_62%)] blur-[30px]" />
          <div className="absolute -bottom-64 -right-44 h-[680px] w-[680px] animate-drift2 rounded-full bg-[radial-gradient(circle,rgba(123,107,255,0.18),transparent_64%)] blur-[34px]" />
        </div>

        <div className="relative z-[1]">{children}</div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
