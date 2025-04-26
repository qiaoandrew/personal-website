import { cn } from "~/utils/tailwind";

function ShortcutGroup({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex gap-x-1", className)} {...props}>
      {children}
    </div>
  );
}

function Shortcut({
  children,
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <kbd
      className={cn(
        "rounded-1 bg-background text-3 text-muted-foreground flex size-4 items-center justify-center overflow-hidden border font-mono",
        className,
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}

export { ShortcutGroup, Shortcut };
