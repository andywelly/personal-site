// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import Footer from '@/components/footer';


export const metadata: Metadata = {
  title: 'My Personal Website',
  description: 'Welcome to my personal website!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}