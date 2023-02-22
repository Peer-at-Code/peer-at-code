import { type ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">{children}</div>
    </div>
  );
}
