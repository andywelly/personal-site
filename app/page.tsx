'use client';

import { useEffect } from 'react';
import CardFlip from '@/components/cardflip';
import ProjectCard from '@/components/projectcard';

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
          <h1 className="text-4xl font-bold mb-4 text-right">Fullstack Software Developer</h1>
          <h2 className="text-xl text-right">Results-driven fullstack developer with client 
            experience and a passion for continuous learning. Proven leadership skills
            through volunteer and professional work and a knack for problem-solving.
            </h2>
          </div>
      </section>
      <section className="fade-right info-set">
        <CardFlip image='./card1.svg' text="First Card"/>
        <CardFlip image='./card2.svg' text="Second Card"/>
        <CardFlip image='./card3.svg' text="Third Card"/>
        <CardFlip image='./card4.svg' text="Fourth Card"/>
      </section>
      <section className="fade-in info-set">
       <ProjectCard/>
      </section>
    </div>
  );
}