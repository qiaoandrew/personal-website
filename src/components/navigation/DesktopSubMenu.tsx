import type { HeaderMenuItem } from "~/types/navigation";
import _Link from "~/components/ui/_Link";

interface DesktopSubMenuProps {
  items: HeaderMenuItem["subItems"];
}

export default function DesktopSubMenu({
  items: activeDesktopSubMenuItems,
}: DesktopSubMenuProps) {
  return (
    <div className="hidden h-52 grid-cols-4 gap-x-4 px-4 pb-4 xl:grid">
      {activeDesktopSubMenuItems.map((item) => (
        <_Link
          href={item.href}
          className="rounded-2.5 bg-secondary dark:bg-secondary/30 flex flex-col gap-y-1 p-3.5"
          key={item.id}
        >
          <span className="text-3.5 font-medium">{item.label}</span>
          <span className="text-3.5 text-muted-foreground leading-5.5">
            {item.description}
          </span>
        </_Link>
      ))}
    </div>
  );
}
