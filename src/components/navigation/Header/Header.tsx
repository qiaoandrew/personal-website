"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { cn } from "~/utils/tailwind";
import type { HeaderMenuItem } from "~/types/navigation";
import GradientText from "~/components/effects/GradientText";
import MobileMobileToggle from "~/components/navigation/Header/MobileMenuToggle";
import MobileMenu from "~/components/navigation/Header/MobileMenu";
import DesktopMenu from "~/components/navigation/Header/DesktopMenu";
import CommandMenu from "~/components/navigation/Header/CommandMenu";
import DesktopSubMenu from "~/components/navigation/Header/DesktopSubMenu";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
  loading: () => <div className="size-9" />,
});

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDesktopMenuSubItems, setActiveDesktopMenuSubItems] = useState<
    HeaderMenuItem["subItems"]
  >([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDesktopMenuSubItems([]);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      onMouseLeave={() => setActiveDesktopMenuSubItems([])}
      className={cn(
        "rounded-2.5 border-border/50 bg-highlight/80 fixed inset-x-3 top-3 z-50 flex flex-col border backdrop-blur-sm transition-[height] duration-100",
        "xl:inset-x-9 xl:top-6",
        "2xl:inset-x-[calc((100vw-1112px)/2)]",
        isMobileMenuOpen ? "h-[calc(100dvh-1.5rem)]" : "h-11",
        activeDesktopMenuSubItems.length > 0 ? "xl:h-62" : "xl:h-13",
      )}
    >
      <div
        className={cn(
          "flex h-10.5 shrink-0 items-stretch justify-between pr-1.5 pl-3",
          "xl:h-12.5 xl:px-4",
        )}
      >
        <div className="flex items-center">
          <Link
            href="/"
            className="font-display text-3.5 xl:text-4 font-semibold"
          >
            <GradientText>Andrew Qiao</GradientText>
          </Link>
          <div
            onMouseEnter={() => setActiveDesktopMenuSubItems([])}
            className="hidden w-6 self-stretch xl:block"
          />
          <DesktopMenu
            setActiveDesktopMenuSubItems={setActiveDesktopMenuSubItems}
          />
        </div>
        <div className="flex items-center gap-x-1 xl:gap-x-2">
          <CommandMenu />
          <ThemeToggle />
          <MobileMobileToggle
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
      {activeDesktopMenuSubItems.length > 0 && (
        <DesktopSubMenu items={activeDesktopMenuSubItems} />
      )}
    </header>
  );
}
