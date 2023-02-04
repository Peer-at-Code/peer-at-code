import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    kind?: 'default' | 'outline' | 'danger';
  }
>(({ kind = 'default', className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-lg border-0 px-5 py-2.5 text-center text-sm font-medium outline-none transition-colors focus:outline-none focus:ring-0 disabled:opacity-50',
      {
        'bg-[#424242] hover:bg-[#424242]/60': kind === 'default',
        'bg-red-600 hover:bg-red-600/60': kind === 'danger'
      },
      className
    )}
    {...props}
  />
));

Button.displayName = 'Button';

export default Button;
