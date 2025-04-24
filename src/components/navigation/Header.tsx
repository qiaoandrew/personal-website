"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";

import { cn } from "~/utils/tailwind";
import GradientText from "~/components/effects/GradientText";
import MobileMobileToggle from "~/components/navigation/MobileMenuToggle";
import MobileMenu from "~/components/navigation/MobileMenu";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
  loading: () => <div className="size-8" />,
});

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header
      className={cn(
        "rounded-2.5 border-border/50 bg-highlight/80 fixed inset-x-3 top-3 flex flex-col border backdrop-blur-sm transition-[height]",
        isMobileMenuOpen ? "h-[calc(100dvh-1.5rem)]" : "h-[42px]",
      )}
    >
      <div className="flex h-10 items-center justify-between py-1 pr-1.5 pl-3">
        <Link href="/" className="font-display text-3.5 font-semibold">
          <GradientText>Andrew Qiao</GradientText>
        </Link>
        <div className="flex items-center gap-x-1">
          <ThemeToggle />
          <MobileMobileToggle
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
      <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </header>
  );
}
