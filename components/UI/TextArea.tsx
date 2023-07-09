import GradientBorder from '@/components/UI/GradientBorder';

type TextAreaProps = {
  id: string;
  name: string;
  placeholder: string;
  rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  value: string;
};

export default function TextArea({
  id,
  name,
  placeholder,
  rows,
  onChange,
  onBlur,
  onFocus,
  value,
}: TextAreaProps) {
  return (
    <GradientBorder
      borderRadius='rounded-md'
      borderColor='dark-main-gradient dark:light-main-gradient'
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
        className='transition-300 -mb-1.5 w-full resize-none rounded-md bg-beige p-5 text-md text-black focus:outline-none dark:bg-black dark:text-purple2'
      />
    </GradientBorder>
  );
}
