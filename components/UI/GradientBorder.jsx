export default function GradientBorder({
  borderRadius,
  borderColor,
  classes,
  children,
}) {
  return (
    <div className={`h-full p-0.25 ${borderRadius} ${borderColor} ${classes}`}>
      {children}
    </div>
  );
}
