'use client';

import { useEffect } from 'react';
// import CardFlip from '@/components/cardflip';
import LangwarrinCard from '@/components/langwarrincard';
import PacmanCard from '@/components/pacmancard';
import CatanCard from '@/components/catancard';
// import CardFlipImage from '@/components/cardflipimage';
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
      <div className="w-full fade-in bg-[rgba(5,101,112,0.50)] py-8 px-4">
        <section className="max-w-[800px] mx-auto fade-left title-set flex flex-col md:flex-row gap-6 items-center"> 
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 text-center md:text-left mx-auto">
            Hi I&apos;m Andwele Ancheta
          </h1>
          <div className='w-full md:text-right'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-right">Fullstack Software Developer</h1>
            <h2 className="text-lg md:text-xl text-center md:text-right">Results-driven fullstack developer with client 
              experience and a passion for continuous learning. Proven leadership skills
              through volunteer and professional work and a knack for problem-solving.
            </h2>
          </div>
        </section>
      </div>
      
      <div className='max-w-[800px] mx-auto px-4'>
        {/* <section className="my-8">
          <h3 className='text-xl font-bold mb-4 text-left mx-auto fade-right'>
            Some Fun Facts About Me:
          </h3>
        </section>
        
        <section className="fade-right info-set grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <CardFlip image='./card1.svg' text="I've lived in three different countries, each contributing to my identity."/>
          <CardFlip image='./card2.svg' text="I am part of a band and can play nearly a dozen instruments"/>
          <CardFlip image='./card3.svg' text="I volunteer for several communities by organising food banks and relief resources"/>
          <CardFlipImage image='./card4.svg' imagelink='/dog.jpg'/>
        </section>
         */}
        <div id="projects" className="scroll-mt-20 pt-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold my-8 py-4 text-center fade-in">Projects</h2>
        </div>
        
        <section className="fade-in info-set md:mb-8">
          <LangwarrinCard/>
        </section>
        <section className="fade-in info-set md:mb-8">
          <NbaCard/>
        </section>
        <section className='fade-in info-set md:mb-8'>
          <AutoCompleteCard/>
        </section>
        <section className='fade-in info-set md:mb-8'>
          <CatanCard/>
        </section>
        <section className='fade-in info-set md:mb-8'>
          <PacmanCard/>
        </section>
      </div>
    </div>
  );
}