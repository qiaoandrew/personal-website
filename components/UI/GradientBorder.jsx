export default function GradientBorder({
  borderRadius,
  borderColor,
  classes,
  children,
}) {
  return (
    <div className={`p-0.25 ${borderRadius} ${borderColor} ${classes}`}>
      {children}
    </div>
  );
}
