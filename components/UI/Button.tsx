import Link from 'next/link';
import GradientBorder from './GradientBorder';

type ButtonProps = {
  type: 'route' | 'link' | 'button' | 'submit';
  route?: string;
  link?: string;
  onClick?: () => void;
  text?: string;
  font?: string;
  bg?: string;
  padding?: string;
  border?: string;
  hover?: string;
  classes?: string;
  children: React.ReactNode;
};

export default function Button({
  type,
  route,
  link,
  onClick,
  text = 'text-purple5 dark:text-purple3',
  font,
  bg = 'bg-beige dark:bg-black',
  padding = 'px-7 py-4',
  border = 'rounded-full border border-purple5 dark:border-purple3',
  hover,
  classes,
  children,
}: ButtonProps) {
  const buttonClasses = `transition-300 md:hover:-translate-y-1 relative inline-block text-center ${text} ${font} ${bg} ${padding} ${border} ${hover} ${classes}`;

  switch (type) {
    case 'route':
      return (
        <Link href={route || ''} className={buttonClasses}>
          {children}
        </Link>
      );
    case 'link':
      return (
        <a
          href={link || ''}
          target='_blank'
          rel='noreferrer noopener'
          className={buttonClasses}
        >
          {children}
        </a>
      );
    case 'button':
      return (
        <button onClick={onClick} className={buttonClasses}>
          {children}
        </button>
      );
    case 'submit':
      return (
        <button type='submit' onClick={onClick} className={buttonClasses}>
          {children}
        </button>
      );
    default:
      return null;
  }
}