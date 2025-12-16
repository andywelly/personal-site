'use client';
import React from 'react';
//import Image from 'next/image';
//import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PacmanPage() {
     const router = useRouter();
    
      const handleGoBack = () => {
        router.back();
      };
  return (
    <div>
        <div className="text-center mt-8">
            <h1>Page Under Construction</h1>
        </div>
        <div className="text-center mt-8">
              <button
                  onClick={handleGoBack}
                  className="text-white outline-double hover:bg-[var(--pacman-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
                >
                  Go Back
              </button>
            </div>
    </div>
  );
}