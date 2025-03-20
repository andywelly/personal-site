'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AutcompletePage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="max-w-[1200px] mx-auto text-[#e0e0e0] font-inter flex flex-col items-center justify-center">
      <div className="w-full mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">NBA Streams</h1>
        <div className='text-center my-4 py-6'>
          <Link
            href="https://github.com/andywelly/nba-streamss" 
            className="text-xl outline-double hover:bg-[var(--nba-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300 mr-2"
          >
            Visit GitHub Repo
          </Link>
          <Link
            href="/report.pdf" 
            className="text-xl outline-double hover:bg-[var(--nba-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300 ml-2"
          >
            Read Report
          </Link>
        </div>
        <div className="flex gap-8">
          {/* Left Column: Grid */}
          <div className="w-1/2">
            {/* Grid Container */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Image
                  src="/dataset.png"
                  alt="Dataset Image"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/csv.png"
                  alt="csv Image"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/output.png"
                  alt="Output Image"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/table.png"
                  alt="Graph Image"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/graph.png"
                  alt="table Image"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/graph_insertions.png"
                  alt="Table Insertions Image"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            {/* Go Back Button */}
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
                This project explored autocomplete efficiency by comparing sorted arrays and radix trees, using a CSV dataset of Melbourne restaurants.
                I hypothesised that the radix tree&apos;s bitwise branching structure would enable superior insertion efficiency, and used comparison
                counts to analyse performance in relation to Big-O notation. <br /><br />
                Sorted array insertion was O(n log n) due to element shifting, while radix trees used bitwise operations for efficient prefix
                matching, reducing comparisons. Analysis with varied datasets confirmed sorted array search was O(log n), with slight increases
                from linear traversal. <br /><br/>
              </p>

              <Image
                  src="/radix.svg"
                  alt="Radix Visualisation"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              <p className="text-justify">
                <br/>
                Sorted arrays offered simplicity, radix trees excelled in insertion via bitwise operations. Despite radix tree challenges with
                large datasets, smaller tests showed its potential. This reinforced understanding of algorithm complexity and data
                structure selection.<br /><br />
                This project enhanced my skills in dynamic memory, bitwise operations, and Big-O analysis. Debugging radix trees improved
                problem-solving and code translation. I learned time/space complexity importance and rigorous testing, alongside the value
                of clear technical reporting. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}