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
      <body className="bg-[#f0f0f0] text-[#e0e0e0] font-inter">
        <div className="fixed top-0 left-0 w-full h-full bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat backdrop-filter:blur(5px)"></div>
        <Header />
        <main className="mx-auto my-8 p-4 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}