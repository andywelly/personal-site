import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PacmanCard() {
  return (
    <div className="text-[#e0e0e0] font-inter flex flex-col items-center justify-center py-6">
      <div className="w-full mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Pac-Man</h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Image - Full width on mobile, half width on desktop */}
          <div className="w-full md:w-1/2">
            <Image
              src="/pacman.png"
              alt="Pacman Game Demo"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text content - Full width on mobile, 3/5 width on desktop */}
          <div className="w-full md:w-3/5">
            <div className="mb-4 md:mb-6">
              <p className="text-sm md:text-base text-center">
                Developed a Pac-Man game in Java, implementing core mechanics such as character control, autonomous ghost AI, and score management.
                This object-oriented software development project showcases proficiency in design principles and the software development life cycle.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center py-2 md:py-3"> 
                <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer" title="Java">
                  <Image
                    src="/java.svg" 
                    alt="Java Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </a>
                <a href="https://www.lwjgl.org/" target="_blank" rel="noopener noreferrer" title="LWJGL">
                  <Image
                    src="/lwjgl.svg" 
                    alt="LWJGL Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </a>
                <a href="https://gradle.org/" target="_blank" rel="noopener noreferrer" title="Gradle">
                  <Image
                    src="/gradle.png" 
                    alt="gradle Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </a>
              </div>
              <div className='text-center mt-3 md:mt-4'>
                <Link
                  href="/pacman"
                  className="text-white hover:bg-[var(--pacman-color)] hover:border-4 border-dashed hover:border-white px-4 md:px-6 py-1 md:py-2 rounded transition-all duration-300 text-sm md:text-base"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}