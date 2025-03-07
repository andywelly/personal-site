import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AutoCompleteCard() {
  return (
    <div className="text-[#e0e0e0] font-inter flex flex-col items-center justify-center">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Autocomplete Optimisation: A Comparative Analysis</h1>

        <div className="flex gap-8">
          {/* Left Column: Image */}
          <div className="w-1/2">
            <Image
              src="/dataset.png"
              alt="Dataset Image"
              height={400}
              width={600}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column: Text */}
          <div className="w-3/5">
            {/* First Section of Text */}
            <div className="mb-6">
              <p className="text-base text-center">
              This project explores the efficiency of autocomplete systems by comparing sorted arrays and radix trees, using a dataset of 
              Melbourne restaurants. Through rigorous implementation and analysis, with findings detailed in a comprehensive report analysing 
              insertion and retrieval speeds, I evaluated the performance of each structure.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-4 justify-center py-3"> 
              <a href="https://www.w3schools.com/c/c_intro.php" target="_blank" rel="noopener noreferrer" title="Java"> {/* Link for Java */}
                <Image
                  src="/c.png" 
                  alt="C Logo"
                  width={50}
                  height={50}
                />
              </a>
              </div>
              <div className='text-center mt-4'>
                  <Link
                    href="/autocomplete"
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