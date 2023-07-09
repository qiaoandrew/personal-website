import GradientBorder from '@/components/UI/GradientBorder';

type TextInputProps = {
  name: string;
  id: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
};

export default function TextInput({
  name,
  id,
  type,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  value,
}: TextInputProps) {
  return (
    <GradientBorder
      borderRadius='rounded-md'
      borderColor='dark-main-gradient dark:light-main-gradient'
    >
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        className='transition-300 w-full rounded-md bg-beige p-5 text-md text-black focus:outline-none dark:bg-black dark:text-purple2'
      />
    </GradientBorder>
  );
}
