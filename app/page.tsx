'use client';

import { useEffect } from 'react';
import CardFlip from '@/components/cardflip';
import LangwarrinCard from '@/components/langwarrincard';
import PacmanCard from '@/components/pacmancard';
import CatanCard from '@/components/catancard';
import CardFlipImage from '@/components/cardflipimage';
import AutoCompleteCard from '@/components/autocompletecard';
import NbaCard from '@/components/nbacard';

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
      <div className='max-w-[800px] mx-auto'>
        <section>
          <h3 className='text-xl font-bold mb-4 text-left mx-auto fade-right'>
            Some Fun Facts About Me:
          </h3>
        </section>
        <section className="fade-right info-set ">
          <CardFlip image='./card1.svg' text="I’ve lived in three different countries, each contributing to my identity."/>
          <CardFlip image='./card2.svg' text="I am part of a band and can play nearly a dozen instruments"/>
          <CardFlip image='./card3.svg' text="I volunteer for several communities by organising food banks and relief resources"/>
          <CardFlipImage image='./card4.svg' imagelink='/dog.jpg'/>
        </section>
        <h2 className="text-5xl font-bold mb-4 pb-8 text-center fade-in">Projects</h2>
        <section className="fade-in info-set">
          <NbaCard/>
        </section>
        <section className="fade-in info-set">
        <LangwarrinCard/>
        </section>
        <section className='fade-in info-set'>
          <AutoCompleteCard/>
        </section>
        <section className='fade-in info-set'>
          <CatanCard/>
        </section>
        <section className='fade-in info-set'>
          <PacmanCard/>
        </section>
      </div>
    </div>
  );
}