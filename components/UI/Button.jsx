import GradientBorder from "./GradientBorder";

export default function Button({ children, purpose, link, onClick, size }) {
  return (
    <div className="transition-300 inline-block cursor-pointer hover:-translate-y-1">
      <GradientBorder
        borderColor="gradient-1 dark:gradient-2"
        borderRadius="rounded-full"
      >
        <div className="rounded-full bg-beige px-7 py-4 dark:bg-black md:py-4.5 md:px-9">
          <p className="gradient-text gradient-1 dark:gradient-2 font-[450] 2xs:text-lg md:text-xl md:font-[450]">
            {children}
          </p>
        </div>
      </GradientBorder>
    </div>
  );
}
