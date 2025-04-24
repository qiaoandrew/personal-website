import _Link from "~/components/ui/_Link";
import { ScrollArea } from "~/components/ui/ScrollArea";
import { HEADER_MENU } from "~/constants/navigation";

interface MobileMenuProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({ setIsMobileMenuOpen }: MobileMenuProps) {
  return (
    <ScrollArea className="h-full xl:hidden">
      <nav className="flex flex-col gap-y-8 px-3 py-6">
        {HEADER_MENU.map((item) => (
          <_Link
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-8 font-semibold"
            key={item.id}
          >
            {item.label}
          </_Link>
        ))}
      </nav>
    </ScrollArea>
  );
}
