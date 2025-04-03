'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile on initial render and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close menu when resizing from mobile to desktop
  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 p-4 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm z-50">
      <nav className="relative p-5 flex items-center justify-between">
        <Link href="/" className="">
          <Image
            src="./basketball.svg"
            alt="Basketball Home Button"
            width={50}
            height={50}
            className="rounded transform hover:scale-150 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-end gap-4">
          <li>
            <Link
              href="/"
              className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
              scroll={true}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-8 h-1 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-8 h-1 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[rgba(0,0,0,0.9)] backdrop-blur-lg p-4 mt-5 rounded-b-lg">
            <ul className="flex flex-col gap-4">
              <li className="border-b border-gray-700 pb-2">
                <Link
                  href="/"
                  className="text-white block py-2 px-4 hover:bg-[var(--accent-color)] rounded transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-700 pb-2">
                <Link
                  href="/#projects"
                  className="text-white block py-2 px-4 hover:bg-[var(--accent-color)] rounded transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="border-b border-gray-700 pb-2">
                <Link
                  href="/about"
                  className="text-white block py-2 px-4 hover:bg-[var(--accent-color)] rounded transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white block py-2 px-4 hover:bg-[var(--accent-color)] rounded transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}