import { cn } from '@/lib/utils';

interface TipsProps {
  className?: string;
  kind?: 'success' | 'error' | 'warning' | 'info';
  text: string;
}

export default function Tips({ className, kind = 'info', text }: TipsProps) {
  return (
    <div
      className={cn('w-full rounded-md ', {
        'bg-green-500': kind === 'success',
        'bg-red-500': kind === 'error',
        'bg-yellow-500': kind === 'warning',
        'bg-blue-500': kind === 'info',
        className
      })}
    >
      <p className="py-2 px-4">{text}</p>
    </div>
  );
}
