'use client';

import './globals.css';
import RootLayoutServer from './layout-server';
import { ReactNode, useEffect } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.5,
    });

    const hiddenElements = document.querySelectorAll('.fade-left, .fade-right, .fade-in');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); 
  return (
    <html lang="en">
      <body className="bg-[#f0f0f0] text-[#e0e0e0] font-inter">
        <div className="fixed top-0 left-0 w-full h-full bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat backdrop-filter:blur(5px)"></div>
        <RootLayoutServer> {/* Wrap children with the server component */}
          <Header />
          <main className="mx-auto my-8 p-4 relative">
            {children}
          </main>
          <div className='relateive z-10'>
            <Footer />
          </div>
        </RootLayoutServer>
      </body>
    </html>
  );

}