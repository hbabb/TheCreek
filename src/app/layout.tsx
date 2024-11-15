import type { Metadata } from "next";
import {
  Inter as Inter,
  Roboto as Roboto,
  Allura as Allura,
  Lobster as Lobster,
  Josefin_Sans as JosefinSans,
  Alegreya as Alegreya,
  Cormorant_Garamond as CormorantGaramond,
} from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Viewport } from "next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-allura",
  weight: "400",
});

const lobster = Lobster({
  subsets: ["latin"],
  variable: "--font-lobster",
  weight: "400",
});

const josefinSans = JosefinSans({
  subsets: ["latin"],
  variable: "--font-josefin",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorantGaramond = CormorantGaramond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: 'Motlow Creek Baptist Church',
    template: '%s | Motlow Creek Baptist Church'
  },
  description: 'Welcome to Motlow Creek Baptist Church - A welcoming community of faith serving through worship, ministry, and outreach.',
  
  // SEO Metadata
  keywords: ['baptist church', 'motlow creek', 'the creek', 'christian community', 'worship', 'sunday school', 'youth ministry', 'motlow community', 'gowensvill', 'campobello', 'children ministry' ],
  authors: [{ name: 'Data Point Solutions | Motlow Creek Baptist Church' }],
  creator: 'Heath Babb',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${roboto.variable} ${allura.variable} ${lobster.variable} ${josefinSans.variable} ${alegreya.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
