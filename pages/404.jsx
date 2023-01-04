import Button from '../components/UI/Button';

export default function Error404() {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="mb-12 text-[128px] font-semibold lg:text-[196px]">
          <span className="gradient-text gradient-main-light dark:gradient-main-dark">
            404
          </span>
        </h1>
        <Button purpose="route" link="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}
