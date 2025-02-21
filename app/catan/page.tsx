import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiJavascript, SiHtml5, SiCss3, SiJquery } from 'react-icons/si'; // Import icons

export default function CatanPage() {
  const technologies = [
    { name: 'JavaScript', icon: <SiJavascript size={50} />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML5', icon: <SiHtml5 size={50} />, link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
    { name: 'CSS', icon: <SiCss3 size={50} />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'jQuery', icon: <SiJquery size={50} />, link: 'https://jquery.com/' },
  ];

  return (
    <div className="max-w-[1200px] mx-auto text-[#e0e0e0] font-inter flex flex-col items-center justify-center">
      <div className="w-full mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Catan Map Generator</h1>
        <div className='text-center mt-4 pb-6'>
          <Link
            href="https://github.com/andywelly/Catan_Map_Generator" // Replace with your GitHub repo link
            className="text-xl outline-double hover:bg-[var(--catan-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
          >
            Visit GitHub Repo
          </Link>
        </div>
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
            <div className="flex flex-wrap gap-4 justify-center pt-4"> 
              {technologies.map((tech) => (
                <a key={tech.name} href={tech.link} target="_blank" rel="noopener noreferrer" title={tech.name}>
                  {tech.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="w-3/5">
            {/* First Section of Text */}
            <div className="mb-6">
              <p className="text-base text-center">
              This project, a Catan map generator, was created for personal use among family and friends to enhance our Catan game nights.  
              Tired of imbalanced setups and arguments over resource distribution, I designed this tool to ensure fair and randomised game boards.  
              It automatically distributes resource tiles, number tokens, and port placements, guaranteeing a unique and balanced playing 
              experience every time we gather. <br/><br/>
              The generator takes the guesswork and potential for bias out of setting up the game, allowing us to focus on the fun and 
              strategic gameplay.  It considers typical Catan map balancing principles, distributing resources and number tokens in a way 
              that avoids overly advantageous or disadvantageous starting positions.  The randomized port placements further add to the 
              variability and replayability of the game. <br/><br/>
              This project was a valuable exercise in applying coding skills to solve a real-world problem, albeit a lighthearted one. 
              It taught me how to translate a practical need—fair and balanced Catan games—into a functional software solution. 
              Beyond the immediate enjoyment it brought to our game nights, it reinforced my problem-solving abilities and demonstrated 
              the power of code to create practical tools for everyday use. <br/><br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}