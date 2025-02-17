import React from 'react';
import Image from 'next/image';

export default function ProjectCard() {
  return (
    <div className="bg-[#1e1e1e] text-[#e0e0e0] font-inter min-h-screen flex flex-col items-center justify-center py-8">
      {/* Main Container */}
      <div className="w-100 max-w-[800px] mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Title Goes Here</h1>

        {/* Two Columns */}
        <div className="flex gap-8">
          {/* Left Column: Image */}
          <div className="w-80">
            <Image
              src="/langwarrin.png"
              alt="Lagwarrin Community Centre Website"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column: Text */}
          <div className="w-[75%]">
            {/* First Section of Text */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Section 1</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Second Section of Text */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Section 2</h2>
              <p className="text-lg">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}