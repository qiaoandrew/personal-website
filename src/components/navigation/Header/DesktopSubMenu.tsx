import Image from "next/image";

import { cn } from "~/utils/tailwind";
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
      {activeDesktopSubMenuItems.map((item) => {
        const imageStyles = cn(
          "absolute block",
          item.id === "pethsapp" && "w-31 -bottom-22 right-3",
          item.id === "snowflake-notebooks" && "w-74 -right-9 -bottom-19",
          item.id === "quadratic-ui" && "w-75 left-5 -bottom-14",
          item.id === "slope" && "w-51 -right-3.5 top-11",
        );

        return (
          <_Link
            href={item.href}
            className="rounded-2.5 bg-secondary dark:bg-secondary/30 relative flex h-47 flex-col gap-y-1 overflow-hidden p-3.5"
            key={item.id}
          >
            {item.imageLight && (
              <Image
                src={item.imageLight}
                alt={item.label}
                className={cn(imageStyles, "dark:hidden")}
              />
            )}
            {item.imageDark && (
              <Image
                src={item.imageDark}
                alt={item.label}
                className={cn(imageStyles, "hidden dark:block")}
              />
            )}
            <div className="absolute inset-0 bg-linear-(--gradient-menu)" />
            <span className="text-3.5 font-medium">{item.label}</span>
            <span className="text-3.5 text-muted-foreground leading-5.5">
              {item.description}
            </span>
          </_Link>
        );
      })}
    </div>
  );
}
