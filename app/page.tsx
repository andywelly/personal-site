'use client';

import { useEffect } from 'react';

export default function HomePage() {
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
  
    const fadeInElements = document.querySelectorAll('.fade-left');
    fadeInElements.forEach((el) => observer.observe(el));

    const fadeRightElements = document.querySelectorAll('.fade-right');
    fadeRightElements.forEach((el) => observer.observe(el));
  
    return () => {
      fadeInElements.forEach((el) => observer.unobserve(el));
      fadeRightElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <section className="title-set fade-left"> 
        <h1 className="text-4xl font-bold mb-4">Hi! I&apos;m Andwele Ancheta</h1>
      </section>
      <section className="fade-right info-set">
        <h2 className="text-lg">Fullstack Developer</h2>
      </section>
      <section className="fade-in info-set">
        <h2 className="text-lg">Other Information</h2>
      </section>
    </div>
  );
}