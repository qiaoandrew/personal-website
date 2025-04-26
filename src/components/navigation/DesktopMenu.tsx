import { HEADER_MENU } from "~/constants/navigation";
import _Link from "~/components/ui/_Link";
import type { HeaderMenuItem } from "~/types/navigation";

interface DesktopMenuProps {
  setActiveDesktopMenuSubItems: React.Dispatch<
    React.SetStateAction<HeaderMenuItem["subItems"]>
  >;
}

export default function DesktopMenu({
  setActiveDesktopMenuSubItems,
}: DesktopMenuProps) {
  return (
    <nav className="hidden items-stretch gap-x-2 self-stretch xl:flex">
      {HEADER_MENU.slice(1).map((item) => (
        <_Link
          href={item.href}
          onMouseEnter={() =>
            item.subItems
              ? setActiveDesktopMenuSubItems(item.subItems)
              : setActiveDesktopMenuSubItems([])
          }
          className="text-muted-foreground text-3.5 hover:text-foreground flex items-center px-2.5 py-1.5 font-medium transition-colors"
          key={item.id}
        >
          <span>{item.label}</span>
        </_Link>
      ))}
    </nav>
  );
}
