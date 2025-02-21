'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PacmanPage() {
     const router = useRouter();
    
      const handleGoBack = () => {
        router.back();
      };
  return (
    <div className="max-w-[1200px] mx-auto text-[#e0e0e0] font-inter flex flex-col items-center justify-center">
      <div className="w-full mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Pac-Man</h1>
        <div className='text-center mt-4 pb-6'>
          <Link
            href="https://github.com/andywelly/Pacman" // Replace with your GitHub repo link
            className="text-xl outline-double hover:bg-[var(--pacman-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
          >
            Visit GitHub Repo
          </Link>
        </div>
        <div className="flex gap-8">
          {/* Left Column: Image */}
          <div className="w-1/2">
            <Image
              src="/pacman.png"
              alt="Pacman Game Demo"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-8">
              <button
                  onClick={handleGoBack}
                  className="text-white outline-double hover:bg-[var(--pacman-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
                >
                  Go Back
              </button>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="w-3/5">
            {/* First Section of Text */}
            <div className="mb-6">
              <p className="text-base text-center">
              This project involved the development of a Pac-Man game using Java, where I implemented the core game mechanics, 
              including player-controlled character movement, autonomous ghost AI, and a system for managing the game score.  
              This involved careful consideration of object-oriented software development principles, allowing for modular, 
              reusable code and a well-structured game architecture. <br/><br/>
              The development process provided hands-on experience with the software development life cycle, from initial design and 
              planning to implementation, testing, and refinement.  I gained a deeper understanding of how each stage contributes to the 
              creation of a functional and maintainable software product.  This project solidified my understanding of object-oriented 
              concepts like encapsulation, inheritance, and polymorphism, and how they can be applied to create complex and interactive systems. <br/><br/>
              Through this Pac-Man game project, I not only created a playable game but also significantly enhanced my understanding of 
              object-oriented software development principles and the software development life cycle. <br/>
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center pt-4"> 
              <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer" title="Java">
                <Image
                  src="/java.svg" 
                  alt="Java Logo"
                  width={50}
                  height={50}
                />
              </a>
              <a href="https://www.lwjgl.org/" target="_blank" rel="noopener noreferrer" title="LWJGL">
                <Image
                  src="/lwjgl.svg" 
                  alt="LWJGL Logo"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}