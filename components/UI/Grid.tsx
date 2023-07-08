type GridProps = {
  children: React.ReactNode;
};

export default function Grid({ children }: GridProps) {
  return (
    <div className='grid grid-cols-1 gap-6 3xs:gap-7 2xs:gap-8 md:grid-cols-2 2xl:gap-12'>
      {children}
    </div>
  );
}
