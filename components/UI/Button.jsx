import Link from 'next/link';
import GradientBorder from './GradientBorder';

/**
 * Text button.
 *
 * @param purpose
 * @param link
 * @param onClick
 * @param size
 * @param mobileFullWidth
 * @param children
 */
export default function Button({
  purpose,
  link,
  onClick,
  mobileFullWidth,
  children,
}) {
  const buttonWidth = mobileFullWidth ? 'w-full md:w-auto' : '';

  const buttonContent = (
    <div
      className={`transition-300 inline-block cursor-pointer text-center hover:-translate-y-1 ${buttonWidth}`}
    >
      <GradientBorder
        borderColor="gradient-main-light dark:gradient-main-dark"
        borderRadius="rounded-full"
      >
        <div
          className={`rounded-full bg-beige px-7 py-4 dark:bg-black md:py-4.5 md:px-9`}
        >
          <p className="gradient-text gradient-main-light dark:gradient-main-dark font-[450] 2xs:text-lg md:text-xl md:font-[450]">
            {children}
          </p>
        </div>
      </GradientBorder>
    </div>
  );

  if (purpose === 'route') {
    return <Link href={link}>{buttonContent}</Link>;
  } else {
    return <div onClick={onClick}>{buttonContent}</div>;
  }
}
