export default function Grid({ children }) {
  return (
    <div className="gap grid grid-cols-1 gap-6 3xs:gap-8 md:grid-cols-2 xl:gap-12 3xl:gap-16">
      {children}
    </div>
  );
}
