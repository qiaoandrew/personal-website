export default function GradientBorder({ borderWidth, children }) {
  return (
    <div className={`gradient-2 p-0.5 ${borderWidth}`}>{children}</div>
  );
}
