import Image from 'next/image';
import blob1 from '../../public/img/blobs/blob-1.svg';

export default function Blobs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={blob1}
        alt="blob 1"
        className="filter-dark-purple absolute right-0 opacity-20"
      />
    </div>
  );
}
