import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Andwele Ancheta',
  description: 'Welcome to my personal website!',
  icons: {
    icon: './basketball.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1e1e1e] text-[#e0e0e0] font-inter">
        <Header />
        <main className="max-w-[800px] mx-auto my-8 p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}