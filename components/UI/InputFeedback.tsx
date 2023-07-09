type InputFeedbackProps = {
  state: 'error' | 'success';
  children: React.ReactNode;
};

export default function InputFeedback({ state, children }: InputFeedbackProps) {
  return (
    <p
      className={`mt-3 md:mt-5 ${
        state === 'error' ? 'text-red' : 'text-green2 dark:text-green1'
      }`}
    >
      {children}
    </p>
  );
}
