import Wrapper from '@/ui/dashboard/Wrapper';
import { type ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}
