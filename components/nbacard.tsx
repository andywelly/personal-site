import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiPostgresql, SiTypescript } from 'react-icons/si'; // Import icons
import { RiNextjsLine, RiVercelFill } from "react-icons/ri";

export default function NbaCard() {
  const technologies = [
    { name: 'TypeScript', icon: <SiTypescript size={50} />, link: 'https://www.typescriptlang.org/' },
    { name: 'NextJS', icon: <RiNextjsLine size={50} />, link: 'https://nextjs.org/' },
    { name: 'Vercel', icon: <RiVercelFill size={50} />, link: 'https://vercel.com/' },
    { name: 'Postgresql', icon: <SiPostgresql size={50} />, link: 'https://www.postgresql.org/' },
  ];

  return (
    <div className="text-[#e0e0e0] font-inter flex flex-col items-center justify-center">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">NBA Streams</h1>

        <div className="flex gap-8">
          {/* Left Column: Image */}
          <div className="w-1/2">
            <Image
              src="/nba.png"
              alt="NBA Streams Screenshot"
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
              Utilising various APIs I created this NBA stream website to allow users to watch live NBA games.
              Users can sign in to access a list of games categorised by date and provides an embedded player for streaming.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-4 justify-center py-3"> 
                {technologies.map((tech) => (
                  <a key={tech.name} href={tech.link} target="_blank" rel="noopener noreferrer" title={tech.name}>
                    {tech.icon}
                  </a>
                ))}
                <a href="https://neon.tech/" target="_blank" rel="noopener noreferrer" title="Neon" className='scale-150'>
                  <Image
                    src="/neon.png" 
                    alt="Neon Logo"
                    width={50}
                    height={50}
                  />
                </a>
                <a href="https://next-auth.js.org/" target="_blank" rel="noopener noreferrer" title="NextAuth">
                  <Image
                    src="/nextauth.png" 
                    alt="Next Auth Logo"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
              <div className='text-center mt-4'>
                  <Link
                    href="/nba"
                  className="text-white hover:bg-[var(--nba-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
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