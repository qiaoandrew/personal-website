import GradientBorder from './GradientBorder';

export default function Input({
  id,
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
}) {
  return (
    <GradientBorder
      borderRadius="rounded-lg"
      borderColor="gradient-main-light dark:gradient-main-dark"
    >
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="w-full rounded-[7px] bg-beige px-4 py-3 text-base text-black focus:outline-none dark:bg-black dark:text-lightPurple"
      />
    </GradientBorder>
  );
}
