import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {SiJavascript, SiHtml5, SiCss3, SiJquery} from 'react-icons/si';

export default function CatanCard() {
  const technologies = [
    { name: 'JavaScript', icon: <SiJavascript size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML5', icon: <SiHtml5 size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
    { name: 'CSS', icon: <SiCss3 size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'jQuery', icon: <SiJquery size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://jquery.com/' },
  ];

  return (
    <div className="text-[#e0e0e0] font-inter flex flex-col items-center justify-center py-6">
      <div className="w-full mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Catan Map Generator</h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Image - Full width on mobile, half width on desktop */}
          <div className="w-full md:w-1/2">
            <Image
              src="/catan.png"
              alt="Catan Map Generator Screenshot"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text content - Full width on mobile, 3/5 width on desktop */}
          <div className="w-full md:w-3/5">
            <div className="mb-4 md:mb-6">
              <p className="text-sm md:text-base text-center">
                I created this Catan map generator for my family and friends to ensure fair and balanced games.  
                It randomises resource tiles, number tokens, and port placements for a unique and enjoyable experience every time we play.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center py-2 md:py-3"> 
                {technologies.map((tech) => (
                  <a key={tech.name} href={tech.link} target="_blank" rel="noopener noreferrer" title={tech.name}>
                    {tech.icon}
                  </a>
                ))}
              </div>
              <div className='text-center mt-3 md:mt-4'>
                <Link
                  href="/catan"
                  className="text-white hover:bg-[var(--catan-color)] hover:border-4 border-dashed hover:border-white px-4 md:px-6 py-1 md:py-2 rounded transition-all duration-300 text-sm md:text-base"
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
