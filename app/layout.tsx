import '@/styles/globals.css';
import 'remixicon/fonts/remixicon.css';

import { Fira_Code } from 'next/font/google';
import localFont from 'next/font/local';
import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';
import DefaultTags from '@/ui/DefaultTags';

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

export const metadata = {
  title: 'Peer-at Code',
  description: 'Peer-at Code a pour but de donner l’envie de coder et d’apprendre par le jeu!'
};

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
      <head>
        <DefaultTags />

        {/* TODO: Use Metadata from 13.2 */}

        {/* <title>Peer-at Code</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peer-at-code.be/" />
        <meta property="og:title" content="Peer-at Code" />
        <meta
          property="og:description"
          content="Peer-at Code a pour but de donner l’envie de coder et d’apprendre par le jeu!"
        />

        <meta property="og:image" content="/assets/social.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://peet-at-code.be/" />
        <meta property="twitter:title" content="Peer-at Code" />
        <meta
          property="twitter:description"
          content="Peer-at Code a pour but de donner l’envie de coder et d’apprendre par le jeu!"
        />
        <meta property="twitter:image" content="/assets/social.jpg" /> */}
      </head>
      <body className="relative min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
