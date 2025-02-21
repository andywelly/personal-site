import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PacmanCard() {
  return (
    <div className="text-[#e0e0e0] font-inter flex flex-col items-center justify-center">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Pac-Man</h1>

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
          </div>

          {/* Right Column: Text */}
          <div className="w-3/5">
            {/* First Section of Text */}
            <div className="mb-6">
              <p className="text-base text-center">
            Developed a Pac-Man game in Java, implementing core mechanics such as character control, autonomous ghost AI, and score management.
             This object-oriented software development project showcases proficiency in design principles and the software development life cycle  
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-4 justify-center py-3"> 
              <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer" title="Java"> {/* Link for Java */}
                <Image
                  src="/java.svg" 
                  alt="Java Logo"
                  width={50}
                  height={50}
                />
              </a>

              <a href="https://www.lwjgl.org/" target="_blank" rel="noopener noreferrer" title="LWJGL"> {/* Link for LWJGL */}
                <Image
                  src="/lwjgl.svg" 
                  alt="LWJGL Logo"
                  width={50}
                  height={50}
                />
              </a>
              </div>
              <div className='text-center mt-4'>
                  <Link
                    href="/pacman"
                  className="text-white hover:bg-[var(--pacman-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
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