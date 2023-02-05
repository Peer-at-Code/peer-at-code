import { cn } from '@/lib/utils';

export default function Icon({ name, className }: { name: string; className?: string }) {
  return <i className={cn(`ri-${name}`, className)} role="img" />;
}
