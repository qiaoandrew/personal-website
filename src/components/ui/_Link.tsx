import Link from "next/link";

interface _LinkProps extends React.ComponentProps<typeof Link> {
  href: string;
}

export default function _Link({ href, ...props }: _LinkProps) {
  const Comp = href.startsWith("/") ? Link : "a";

  return (
    <Comp
      href={href}
      {...(!href.startsWith("/") && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      {...props}
    />
  );
}
