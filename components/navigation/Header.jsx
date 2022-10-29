import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-2 mt-9 flex items-center justify-between overflow-hidden rounded-full bg-transparent px-3 py-4 backdrop-blur-md">
      <Link href="/" className="gradient-text gradient-2 text-lg font-medium">
        Andrew Qiao
      </Link>
      <div className="flex gap-9">
        <div className="h-6 w-6 rounded-full border border-black bg-purple">
          <div className="-mt-0.25 -ml-0.25 h-6 w-3 rounded-l-full bg-black"></div>
        </div>
        <div className="flex flex-col gap-1.25">
          <div className="h-1.5 w-6 rounded-full bg-black" />
          <div className="h-1.5 w-9 rounded-full bg-black" />
          <div className="h-1.5 w-6 self-end rounded-full bg-black" />
        </div>
      </div>
    </header>
  );
}
