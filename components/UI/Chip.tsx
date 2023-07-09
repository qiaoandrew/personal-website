import GradientBorder from './GradientBorder';

type ChipProps = {
  children: React.ReactNode;
};

export default function Chip({ children }: ChipProps) {
  return (
    <GradientBorder
      borderRadius='rounded-full'
      borderColor='dark:light-main-gradient dark-main-gradient'
      classes='inline-block'
    >
      <div className='transition-300 inline-block rounded-full bg-beige px-3 py-1.5 last:mr-0 dark:bg-black xs:px-4 md:px-3 md:py-1.5 xl:px-4'>
        <p className='transition-300 text-xs text-purple5 dark:text-purple2 xs:text-sm md:text-xs xl:text-sm'>
          {children}
        </p>
      </div>
    </GradientBorder>
  );
}
