import '@/styles/globals.css';
import 'remixicon/fonts/remixicon.css';

import { Fira_Code } from '@next/font/google';
import localFont from '@next/font/local';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

const sans = localFont({
  variable: '--font-sans',
  src: './fonts/Karrik.woff2',
  weight: 'variable'
});

const code = Fira_Code({
  variable: '--font-code',
  subsets: ['latin'],
  weight: 'variable'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={cn(
        'scroll-smooth bg-gradient-to-b from-primary-800 to-primary-900 [color-scheme:dark]',
        sans.variable,
        code.variable
      )}
    >
      <head />
      <body className="relative min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
