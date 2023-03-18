import BoringAvatar from 'boring-avatars';
import Image from 'next/image';

import { cn } from '@/lib/utils';

export function Avatar({ name, size = 36 }: { name: string; size?: number }) {
  return <BoringAvatar name={name} variant="beam" size={size} />;
}

export function Base64Avatar({
  name,
  src,
  className
}: {
  name: string;
  src: string;
  className?: string;
}) {
  return (
    <Image
      src={`data:image;base64,${src}`}
      className={cn('rounded-full object-cover', className)}
      width="0"
      height="0"
      alt={name}
    />
  );
}

export default function AvatarComponent({
  name,
  src,
  size = 36,
  className
}: {
  name: string;
  src: string;
  size?: number;
  className?: string;
}) {
  return src ? (
    <Base64Avatar name={name} src={src} className={className} />
  ) : (
    <Avatar name={name} size={size} />
  );
}
