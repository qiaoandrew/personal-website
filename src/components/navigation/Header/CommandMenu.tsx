import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Shortcut, ShortcutGroup } from "~/components/ui/Shortcut";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/CommandMenu";
import { HEADER_MENU } from "~/constants/navigation";
import { SOCIALS } from "~/constants/socials";

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-background rounded-2 hover:bg-muted/50 hidden h-9 w-68 cursor-pointer items-center justify-between border px-2.5 transition-colors xl:flex"
      >
        <span className="flex items-center gap-1.5">
          <SearchIcon className="text-muted-foreground size-3.5" />
          <span className="text-muted-foreground text-3.5">
            Search website...
          </span>
        </span>
        <ShortcutGroup>
          <Shortcut className="text-4 bg-muted/50 pt-0.25">⌘</Shortcut>
          <Shortcut className="bg-muted/50">K</Shortcut>
        </ShortcutGroup>
      </button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search website..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Home">
            {HEADER_MENU.slice(1).map((item) => (
              <CommandItem
                onSelect={() => handleSelect(() => router.push(item.href))}
                key={item.id}
              >
                <item.Icon />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Socials">
            {SOCIALS.map((social) => (
              <CommandItem
                onSelect={() => handleSelect(() => window.open(social.href))}
                key={social.id}
              >
                <social.Icon />
                {social.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => handleSelect(() => setTheme("light"))}>
              <SunIcon />
              Light
            </CommandItem>
            <CommandItem onSelect={() => handleSelect(() => setTheme("dark"))}>
              <MoonIcon />
              Dark
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
