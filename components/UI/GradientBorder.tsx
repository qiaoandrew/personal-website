type GradientBorderProps = {
  borderRadius: string;
  borderColor: string;
  classes?: string;
  children: React.ReactNode;
};

export default function GradientBorder({
  borderRadius,
  borderColor,
  classes,
  children,
}: GradientBorderProps) {
  return (
    <div
      className={`transition-300 h-full overflow-hidden p-0.25 ${borderRadius} ${borderColor} ${classes}`}
    >
      {children}
    </div>
  );
}
