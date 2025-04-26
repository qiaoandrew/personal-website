import { HEADER_MENU } from "~/constants/navigation";
import _Link from "~/components/ui/_Link";
import { ScrollArea } from "~/components/ui/ScrollArea";

interface MobileMenuProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({ setIsMobileMenuOpen }: MobileMenuProps) {
  return (
    <ScrollArea className="grow xl:hidden">
      <nav className="flex flex-col gap-y-6 px-3 pt-6 pb-3">
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
