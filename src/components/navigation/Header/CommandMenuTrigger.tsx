import { SearchIcon } from "lucide-react";

import { Shortcut, ShortcutGroup } from "~/components/ui/Shortcut";

export default function CommandMenuTrigger() {
  return (
    <button
      type="button"
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
  );
}
