import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    kind?: 'default' | 'danger' | 'brand';
  }
>(({ kind = 'default', className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-md border-0 px-5 py-2.5 text-center text-sm font-medium outline-none transition-colors focus:outline-none focus:ring-0 disabled:opacity-50',
      {
        'bg-highlight-primary hover:bg-highlight-primary/60': kind === 'default',
        'bg-error hover:bg-error/60': kind === 'danger',
        'bg-brand hover:bg-brand/60': kind === 'brand'
      },
      className
    )}
    {...props}
  />
));

Button.displayName = 'Button';

export default Button;
