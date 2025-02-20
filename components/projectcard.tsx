import React from 'react';
import Image from 'next/image';

export default function ProjectCard() {
  return (
    <div className="bg-[#1e1e1e] text-[#e0e0e0] font-inter min-h-screen flex flex-col items-center justify-center py-8">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="w-full mx-auto">
        <h1 className="text-4xl font-bold text-left mb-8">Langwarrin Community Centre</h1>

        <div className="flex gap-8">
          {/* Left Column: Image */}
          <div className="w-2/5">
            <Image
              src="/langwarrin.png"
              alt="Lagwarrin Community Centre Website"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column: Text */}
          <div className="w-3/5">
            {/* First Section of Text */}
            <div className="mb-6">
              <p className="text-base">
              This project is a web application developed as a part of IT Project COMP30022 at the University of Melbourne. 
              This full-stack web application is an online platform which improves upon the original Langwarrin Community Centre Website. 
              The project aims to create an accessible and user-friendly platform for community members.
              </p>
            </div>

            {/* Second Section of Text */}
            <div>
              <p className="text-base">
                Technologies Used:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}