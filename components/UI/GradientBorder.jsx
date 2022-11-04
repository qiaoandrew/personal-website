/**
 * Gradient border.
 *
 * @param borderRadius determines the radius of the border
 * @param borderColor determines the color of the border
 * @param classes are any other classes added to the border
 * @param children is what will be inside the border
 */
export default function GradientBorder({
  borderRadius,
  borderColor,
  classes,
  children,
}) {
  return (
    <div
      className={`transition-300 h-full p-0.25 ${borderRadius} ${borderColor} ${classes}`}
    >
      {children}
    </div>
  );
}
