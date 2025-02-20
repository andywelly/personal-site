'use client';

import { useEffect } from 'react';
import CardFlip from '@/components/cardflip';
import LangwarrinPage from '@/components/langwarrincard';
import PacmanCard from '@/components/pacmancard';
import CatanPage from '@/components/catancard';

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

    const hiddenElements = document.querySelectorAll('.fade-left, .fade-right, .fade-in');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div>
      <div className="w-full fade-in bg-[rgba(5,101,112,0.50)]">
      <section className="max-w-[800px] mx-auto fade-left title-set flex-col md:flex-row"> 
        <h1 className="text-8xl font-bold mb-4 text-left mx-auto">Hi I&apos;m Andwele Ancheta
        </h1>
        <div className='md:text-right'>
          <h1 className="text-4xl font-bold mb-4 text-right">Fullstack Software Developer</h1>
          <h2 className="text-xl text-right">Results-driven fullstack developer with client 
            experience and a passion for continuous learning. Proven leadership skills
            through volunteer and professional work and a knack for problem-solving.
            </h2>
          </div>
        </section>
      </div>
      <div className='max-w-[800px] mx-auto '>
        <section>
          <h3 className='text-xl font-bold mb-4 text-left mx-auto fade-right'>
            Some Fun Facts About Me:
          </h3>
        </section>
        <section className="fade-right info-set">
          <CardFlip image='./card1.svg' text="First Card"/>
          <CardFlip image='./card2.svg' text="Second Card"/>
          <CardFlip image='./card3.svg' text="Third Card"/>
          <CardFlip image='./card4.svg' text="Fourth Card"/>
        </section>
        <section className="fade-in info-set">
        <LangwarrinPage/>
        </section>
        <section className='fade-in info-set'>
          <CatanPage/>
        </section>
        <section className='fade-in info-set'>
          <PacmanCard/>
        </section>
      </div>
    </div>
  );
}