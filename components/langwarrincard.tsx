import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiStrapi, SiPostgresql} from 'react-icons/si'; // Import icons

export default function LangwarrinPage() {
  const technologies = [
    { name: 'React', icon: <SiReact size={50} />, link: 'https://reactjs.org/' },
    { name: 'JavaScript', icon: <SiJavascript size={50} />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML5', icon: <SiHtml5 size={50} />, link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
    { name: 'CSS', icon: <SiCss3 size={50} />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Strapi', icon: <SiStrapi size={50} />, link: 'https://strapi.io/' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={50} />, link: 'https://www.postgresql.org/'}
  ];

  return (
    <div className="bg-[#1e1e1e] text-[#e0e0e0] font-inter flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold mb-4 pb-8">Projects</h2>
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Langwarrin Community Centre</h1>

        <div className="flex gap-8">
          {/* Left Column: Image */}
          <div className="w-1/2">
            <Image
              src="./langwarrin.svg"
              alt="Lagwarrin Community Centre Website"
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
                Led a team of five to work alongside the Langwarrin Community Centre to develop a full-stack web application to improve upon their original website.
                The project aims to create an accessible and user-friendly platform for community members.
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
                    href="/langwarrin"
                  className="text-white hover:bg-[var(--langwarrin-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
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