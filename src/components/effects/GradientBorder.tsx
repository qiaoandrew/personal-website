import { cn } from "~/utils/tailwind";

interface GradientBorderProps {
  className?: string;
  children: React.ReactNode;
}

export default function GradientBorder({
  className,
  children,
}: GradientBorderProps) {
  return (
    <div className={cn("bg-linear-(--gradient-border) p-px", className)}>
      {children}
    </div>
  );
}
