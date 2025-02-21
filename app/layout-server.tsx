import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Andwele Ancheta',
  description: 'Welcome to my personal website!',
  icons: {
    icon: './basketball.svg',
  },
};

export default function RootLayoutServer({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}