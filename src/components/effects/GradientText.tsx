import { cn } from "~/utils/tailwind";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-linear-(--gradient-foreground) bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
