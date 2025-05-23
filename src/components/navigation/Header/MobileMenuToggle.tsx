import { cn } from "~/utils/tailwind";

interface MobileMobileToggleProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMobileToggle({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMobileToggleProps) {
  return (
    <button
      type="button"
      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      className={cn(
        "flex size-9 items-center justify-center self-center",
        "xl:hidden",
      )}
    >
      <span className="relative size-5">
        <span
          className={cn(
            "bg-muted-foreground absolute top-0 left-0 h-0.5 w-5 transition-transform",
            isMobileMenuOpen
              ? "translate-y-[9px] rotate-45"
              : "translate-y-[5px] rotate-0",
          )}
        />
        <span
          className={cn(
            "bg-muted-foreground absolute top-0 left-0 h-0.5 w-5 transition-transform",
            isMobileMenuOpen
              ? "translate-y-[9px] -rotate-45"
              : "translate-y-[13px] rotate-0",
          )}
        />
      </span>
    </button>
  );
}
