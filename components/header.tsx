'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4">
      <nav className="relative z-10 p-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="./basketball.svg"
            alt="Basketball Home Button"
            width={50}
            height={50}
            className="rounded transform hover:scale-150 transition-transform duration-300"
          />
        </Link>

        {/* Burger Menu Icon (Visible on Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links (Hidden on Mobile by Default) */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row lg:justify-end gap-4 absolute lg:static top-16 right-0 bg-[var(--accent-color)] lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none`}
        >
          <li>
            <Link
              href="/"
              className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300 block lg:inline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300 block lg:inline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-6 py-2 rounded transition-all duration-300 block lg:inline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}