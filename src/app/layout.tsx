import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { GeistMono } from "geist/font/mono";

import "~/styles/globals.css";
import Header from "~/components/navigation/Header/Header";
import Spotlight from "~/components/effects/Spotlight";
import Footer from "~/components/navigation/Footer/Footer";
import { Toaster } from "~/components/ui/Toaster";

export const metadata: Metadata = {
  title: "Andrew Qiao",
  description: "I'm Andrew Qiao. I like building cool things with cool people.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${GeistMono.className}`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem={false}
        >
          <Spotlight />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
