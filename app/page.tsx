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
      threshold: 0.5, // Adjust as needed
    });

    // Observe elements with .fade-left or .fade-right
    const hiddenElements = document.querySelectorAll('.fade-left, .fade-right');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <section className="fade-left title-set purp-back"> 
        <h1 className="text-8xl font-bold mb-4 text-left">Hi I&apos;m Andwele Ancheta
        </h1>
        <div>
          <h1 className="text-4xl font-bold mb-4 text-right">Software Developer</h1>
          <h2 className="text-xl text-right">Results-driven full-stack developer with client 
            experience and a passion for continuous learning. Proven leadership skills
            through volunteer and professional work and a knack for problem-solving.
            </h2>
          </div>

      </section>
      <section className="fade-right info-set">
        <h2 className="text-lg">Fullstack Developer</h2>
      </section>
      <section className="fade-left info-set">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
      </section>
      <section>
        
      </section>
    </div>
  );
}