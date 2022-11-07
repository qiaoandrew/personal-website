/**
 * Grid to display projects and experiences on homepage.
 *
 * @param children Elements that will be displayed in the grid
 */
export default function Grid({ children }) {
  return (
    <div className="grid grid-cols-1 gap-6 3xs:gap-7 2xs:gap-8 md:grid-cols-2 2xl:gap-12">
      {children}
    </div>
  );
}
