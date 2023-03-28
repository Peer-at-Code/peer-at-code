import Image from 'next/image';

import { cn } from '@/lib/utils';

export const DIFFICULTY_COLOR = {
  1: 'green',
  2: 'yellow',
  3: 'red'
};

export default function Badge({
  name,
  src,
  alt,
  level
}: {
  name: string;
  src: string;
  alt: string;
  level: number;
}) {
  return (
    <div className="flex w-24 flex-col space-y-2 text-center">
      <Image
        src={`data:image;base64,${src}`}
        alt={alt}
        className={cn(`rounded-full border-2 lg:border-4`, {
          'border-green-600': level === 1,
          'border-yellow-600': level === 2,
          'border-red-600': level === 3
        })}
        width={500}
        height={500}
      />
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
}
