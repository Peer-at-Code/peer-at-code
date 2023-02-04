import { cn } from '@/lib/utils';

interface ToHTMLProps {
  html: string;
  className?: string;
}

export default function ToHTML({ html, className }: ToHTMLProps) {
  return (
    <div className={cn('select-none', className)} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
