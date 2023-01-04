import GradientBorder from './GradientBorder';

export default function TextArea({
  id,
  name,
  placeholder,
  rows,
  onChange,
  onBlur,
  onFocus,
  value,
}) {
  return (
    <GradientBorder
      borderRadius="rounded-lg"
      borderColor="gradient-main-light dark:gradient-main-dark"
    >
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        className="-mb-1.5 w-full resize-none rounded-[7px] bg-beige px-4 py-3 text-base text-black focus:outline-none dark:bg-black dark:text-lightPurple"
      />
    </GradientBorder>
  );
}
