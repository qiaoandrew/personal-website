type InputFeedbackProps = {
  state: 'error' | 'success';
  children: React.ReactNode;
};

export default function InputFeedback({ state, children }: InputFeedbackProps) {
  return (
    <p
      className={`mt-3 text-sm lg:text-md ${
        state === 'error' ? 'text-red' : 'text-green2'
      }`}
    >
      {children}
    </p>
  );
}
