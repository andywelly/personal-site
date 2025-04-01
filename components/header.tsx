import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  scrollToProjects?: () => void;
}

const Header: FC<HeaderProps> = ({ scrollToProjects }) => {
  return (
    <header className="p-4 sticky top-0 bg-black bg-opacity-80 backdrop-blur-sm z-50">
      <nav className="relative p-2 flex flex-col sm:flex-row items-center justify-between">
        <Link
          href="/"
          className="mb-4 sm:mb-0"
        >
          <Image
            src="./basketball.svg"
            alt="Basketball Home Button"
            width={50}
            height={50}
            className="rounded transform hover:scale-150 transition-transform duration-300"
          />
        </Link>

        <ul className="flex flex-wrap justify-center sm:justify-end gap-2 md:gap-4">
          <li>
            <Link
              href="/"
              className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-3 md:px-6 py-2 rounded transition-all duration-300 text-sm md:text-base"
            >
              Home
            </Link>
          </li>
          {scrollToProjects && (
            <li>
              <a
                onClick={scrollToProjects}
                className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-3 md:px-6 py-2 rounded transition-all duration-300 text-sm md:text-base"
              >
                Projects
              </a>
            </li>
          )}
          <li>
            <Link
              href="/about"
              className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-3 md:px-6 py-2 rounded transition-all duration-300 text-sm md:text-base"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:bg-[var(--accent-color)] hover:border-4 border-dashed hover:border-white px-3 md:px-6 py-2 rounded transition-all duration-300 text-sm md:text-base"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;