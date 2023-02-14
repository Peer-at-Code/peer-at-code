'use client';

import { cn } from '@/lib/utils';
import Mardown from 'react-markdown';

export default function ToHTML({ data, className }: { data: string; className?: string }) {
  return (
    <div className={cn('select-none', className)}>
      <Mardown>{data}</Mardown>
    </div>
  );
}
