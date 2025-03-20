'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiPostgresql, SiTypescript } from 'react-icons/si';
import { RiNextjsLine, RiVercelFill } from "react-icons/ri";
import { useRouter } from 'next/navigation';

export default function NbaPage() {
  const technologies = [
    { name: 'TypeScript', icon: <SiTypescript size={50} />, link: 'https://www.typescriptlang.org/' },
    { name: 'NextJS', icon: <RiNextjsLine size={50} />, link: 'https://nextjs.org/' },
    { name: 'Vercel', icon: <RiVercelFill size={50} />, link: 'https://vercel.com/' },
    { name: 'Postgresql', icon: <SiPostgresql size={50} />, link: 'https://www.postgresql.org/' },
  ];

  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  
  return (
    <div className="max-w-[1200px] mx-auto text-[#e0e0e0] font-inter flex flex-col items-center justify-center">
      <div className="w-full mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">NBA Streams</h1>
        <div className='text-center mt-4 pb-6'>
          <Link
            href="https://github.com/andywelly/nba-streams" 
            className="text-xl outline-double hover:bg-[var(--nba-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
          >
            Visit GitHub Repo
          </Link>
        </div>
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
            <div className="text-center mt-8">
          <button
            onClick={handleGoBack}
            className="text-white outline-double hover:bg-[var(--nba-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
          >
            Go Back
          </button>
        </div>
          </div>

          {/* Right Column: Text */}
          <div className="w-3/5">
            {/* First Section of Text */}
            <div className="mb-6">
            <p className="text-justify"> 
                NBA Streams is a web application designed to provide basketball enthusiasts with easy access to live NBA games. 
                Created to enhance the viewing experience for fans, this project allows users to stream games seamlessly, 
                eliminating the hassle of searching for reliable sources. With a focus on simplicity and functionality, 
                NBA Streams ensures that users can enjoy their favorite games with minimal interruptions. <br/><br/> 

                The application features a clean and intuitive interface, categorising games by date: Today, Tomorrow, and Upcoming so
                users can quickly find the games they want to watch. By integrating with a database to fetch game data and embedding
                a player for streaming, NBA Streams delivers a smooth and enjoyable experience. The addition of user authentication
                ensures that only registered users can access the streams, adding a layer of security and exclusivity. <br/><br/> 

                This project was born out of a passion for basketball and a desire to create a tool that simplifies the process 
                of watching live games. It taught me how to integrate various technologies, such as Next.js for the frontend, 
                Neon for database management, and NextAuth.js for authentication, into a cohesive and functional application. 
                Beyond its practical use, NBA Streams reinforced my ability to solve real-world problems through coding and 
                demonstrated the potential of technology to enhance everyday experiences. <br/><br/> </p>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}