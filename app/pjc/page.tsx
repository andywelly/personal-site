'use client';
import React from 'react';
import Image from 'next/image';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiPostgresql, SiAmazonwebservices} from 'react-icons/si';
import { useRouter } from 'next/navigation';

export default function LangwarrinPage() {
  const technologies = [
    { name: 'React', icon: <SiReact size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://reactjs.org/' },
    { name: 'JavaScript', icon: <SiJavascript size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML5', icon: <SiHtml5 size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
    { name: 'CSS', icon: <SiCss3 size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://www.postgresql.org/'},
    { name: 'AWS', icon: <SiAmazonwebservices size={40} className="md:w-10 md:h-10 w-8 h-8" />, link: 'https://aws.amazon.com/'}
  ];

   const router = useRouter();
  
    const handleGoBack = () => {
      router.back();
    };
  return (
    <div className="max-w-[1200px] mx-auto text-[#e0e0e0] font-inter flex flex-col items-center justify-center">
      <div className="w-full mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Project Juan Cares</h1>
        <div className="flex gap-8">
          {/* Left Column: Image */}
          <div className="w-1/2">
            <Image
              src="/pjc.png"
              alt="Project Juan Cares Website"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-8">
              <button
                onClick={handleGoBack}
                className="text-white outline-double hover:bg-[var(--pjc-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
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
              Collaborating closely with stakeholders as a freelance developer, I designed, built, and maintained a full-stack platform for 
              the Project Juan Cares NDIS Provider. This partnership-driven approach involved regular communication and feedback loops to 
              ensure the platform accurately reflected organisational values, service offerings, and compliance requirements. <br/><br/>

              I worked directly with non-technical stakeholders to translate business goals, operational workflows, and user needs 
              into clear technical requirements and practical solutions. Through iterative discussions and demonstrations, I adapted 
              features and system behaviour as requirements evolved, ensuring the platform remained aligned with service delivery 
              processes and improved both staff efficiency and client experience.<br/><br/>

              Beyond initial delivery, I continued to support the platform through ongoing maintenance and feature development. 
              <br/>
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center pt-4"> 
              {technologies.map((tech) => (
                <a key={tech.name} href={tech.link} target="_blank" rel="noopener noreferrer" title={tech.name}>
                  {tech.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>

            </div>
      </div>
    </div>
  );
}