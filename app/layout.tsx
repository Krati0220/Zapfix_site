import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZapFix — Need a Fix? Zap It. | AI-Powered Home Services",
  description:
    "ZapFix is India's AI-powered home services platform. Upload a photo of your appliance, get instant AI diagnosis, transparent pricing, and verified professionals. Download the Android APK.",
  keywords: [
    "ZapFix",
    "AI home repair",
    "home services India",
    "AC repair",
    "washing machine repair",
    "verified technicians",
    "appliance repair AI",
  ],
  openGraph: {
    title: "ZapFix — Home Repairs. Now Powered by AI.",
    description:
      "Upload. Diagnose. Fix. India's first AI-powered home services platform.",
    type: "website",
  },
  verification: {
    google: "kiMJn7PzzaXbQTQrDwQcEoIUWLoA00nUO1htexyuVhk",
  },
};

export const viewport: Viewport = {
  themeColor: "#070f24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-navy-950 text-white antialiased">{children}</body>
    </html>
  );
}
