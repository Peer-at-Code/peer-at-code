import Image from 'next/image';

import { cn } from '@/lib/utils';

export type Difficulty = 'easy' | 'medium' | 'hard';

export default function Badge({
  title,
  path,
  alt,
  type = 'easy',
  earned = false
}: {
  title: string;
  path: string;
  alt: string;
  type?: Difficulty;
  earned?: boolean;
}) {
  return (
    <div className="flex w-24 flex-col space-y-2 text-center">
      <Image
        src={path}
        alt={alt}
        className={cn(`rounded-full border-2 lg:border-4`, {
          'border-green-600': type === 'easy',
          'border-yellow-600': type === 'medium',
          'border-red-600': type === 'hard',
          'border-gray-600 opacity-40': !earned
        })}
        width={500}
        height={500}
      />
      <span className="text-sm font-semibold">{earned ? title : '****'}</span>
    </div>
  );
}
