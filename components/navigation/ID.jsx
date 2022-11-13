/**
 * ID element that is moved upwards to avoid navbar blocking the top of a section upon navigation.
 *
 * @param id is the HTML ID of the section
 */
export default function ID({ id }) {
  return (
    <div
      className="absolute -mt-24 2xs:-mt-28 md:-mt-32 lg:-mt-28 xl:-mt-32 2xl:-mt-36"
      id={id}
    />
  );
}
