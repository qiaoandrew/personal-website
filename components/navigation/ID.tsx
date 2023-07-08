type IDProps = { id: string };

export default function ID({ id }: IDProps) {
  return (
    <div
      className='absolute -mt-24 2xs:-mt-28 md:-mt-32 lg:-mt-28 xl:-mt-32 2xl:-mt-36'
      id={id}
    />
  );
}
