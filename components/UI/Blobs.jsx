import Image from "next/image";

import blob1 from "../../public/img/graphics/blob-1.png";

export default function Blobs() {
  return (
    <div className="purple-filter dark:dark-purple-filter absolute right-[10vw] top-[10vh] -z-10 dark:opacity-40">
      <Image src={blob1} layout="responsive" priority alt="Blob 1" />
    </div>
  );
}
