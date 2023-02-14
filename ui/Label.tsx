import { cn } from '@/lib/utils';

export default function Label({
  label,
  description,
  className,
  required,
  children
}: {
  className?: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={cn('flex flex-col gap-1 text-left', className)}>
      <span className="text-sm">
        {label}
        {required && <span className="ml-1 text-error">*</span>}
      </span>
      {description && <span className="text-xs text-muted">{description}</span>}
      {children}
    </label>
  );
}
