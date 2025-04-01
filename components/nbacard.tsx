import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiPostgresql, SiTypescript } from 'react-icons/si';
import { RiNextjsLine, RiVercelFill } from "react-icons/ri";

export default function NbaCard() {
  const technologies = [
    { name: 'TypeScript', icon: <SiTypescript size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://www.typescriptlang.org/' },
    { name: 'NextJS', icon: <RiNextjsLine size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://nextjs.org/' },
    { name: 'Vercel', icon: <RiVercelFill size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://vercel.com/' },
    { name: 'Postgresql', icon: <SiPostgresql size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://www.postgresql.org/' },
  ];

  return (
    <div className="text-[#e0e0e0] font-inter flex flex-col items-center justify-center py-6">
      <div className="w-full mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">NBA Streams</h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Image - Full width on mobile, half width on desktop */}
          <div className="w-full md:w-1/2">
            <Image
              src="/nba.png"
              alt="NBA Streams Screenshot"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text content - Full width on mobile, 3/5 width on desktop */}
          <div className="w-full md:w-3/5">
            <div className="mb-4 md:mb-6">
              <p className="text-sm md:text-base text-center">
                Utilising various APIs I created this NBA stream website to allow users to watch live NBA games.
                Users can sign in to access a list of games categorised by date and provides an embedded player for streaming.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center py-2 md:py-3"> 
                {technologies.map((tech) => (
                  <a key={tech.name} href={tech.link} target="_blank" rel="noopener noreferrer" title={tech.name}>
                    {tech.icon}
                  </a>
                ))}
                <a href="https://neon.tech/" target="_blank" rel="noopener noreferrer" title="Neon" className='scale-125 md:scale-150'>
                  <Image
                    src="/neon.png" 
                    alt="Neon Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </a>
                <a href="https://next-auth.js.org/" target="_blank" rel="noopener noreferrer" title="NextAuth">
                  <Image
                    src="/nextauth.png" 
                    alt="Next Auth Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </a>
              </div>
              <div className='text-center mt-3 md:mt-4'>
                <Link
                  href="/nba"
                  className="text-white hover:bg-[var(--nba-color)] hover:border-4 border-dashed hover:border-white px-4 md:px-6 py-1 md:py-2 rounded transition-all duration-300 text-sm md:text-base"
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
