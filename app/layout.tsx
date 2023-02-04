import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={cn('[color-scheme:dark] scroll-smooth')}>
      <head />
      <body className="min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
