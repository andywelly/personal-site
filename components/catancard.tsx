import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {SiJavascript, SiHtml5, SiCss3, SiJquery} from 'react-icons/si'; // Import icons

export default function CatanCard() {
  const technologies = [
    { name: 'JavaScript', icon: <SiJavascript size={50} />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML5', icon: <SiHtml5 size={50} />, link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
    { name: 'CSS', icon: <SiCss3 size={50} />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'jQuery', icon: <SiJquery size={50} />, link: 'https://jquery.com/' },
  ];

  return (
    <div className="text-[#e0e0e0] font-inter flex flex-col items-center justify-center">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Catan Map Generator</h1>

        <div className="flex gap-8">
          {/* Left Column: Image */}
          <div className="w-1/2">
            <Image
              src="./catan.svg"
              alt="Catan Map Generator Screenshot"
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
              I created this Catan map generator for my family and friends to ensure fair and balanced games.  
              It randomises resource tiles, number tokens, and port placements for a unique and enjoyable experience every time we play.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-4 justify-center py-3"> 
                {technologies.map((tech) => (
                  <a key={tech.name} href={tech.link} target="_blank" rel="noopener noreferrer" title={tech.name}>
                    {tech.icon}
                  </a>
                ))}
              </div>
              <div className='text-center mt-4'>
                  <Link
                    href="/catan"
                  className="text-white hover:bg-[var(--catan-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
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