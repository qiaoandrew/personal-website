import { FOOTER_MENU } from "~/constants/navigation";
import { cn } from "~/utils/tailwind";
import _Link from "~/components/ui/_Link";

export default function FooterMenu() {
  return (
    <nav className="flex items-start justify-between gap-9">
      {FOOTER_MENU.map((group) => (
        <div className={cn("flex flex-col gap-2 md:w-40")} key={group.id}>
          <p className="text-4 font-display font-semibold">{group.label}</p>
          {group.subItems.map((item) => (
            <_Link
              href={item.href}
              className="text-muted-foreground font-display hover:text-foreground font-medium"
              key={item.id}
            >
              {item.label}
            </_Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
