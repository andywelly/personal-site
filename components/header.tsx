import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="p-4">
      <nav className="relative z-10 p-5 flex items-center justify-between">
        <Link
          href="/"
          className=""
        >
          <Image
            src="./basketball.svg"
            alt="Basketball Home Button"
            width={50}
            height={50}
            className="rounded transform hover:scale-150 transition-transform duration-300"
          />
        </Link>

        <ul className="flex justify-end gap-4">
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
      </nav>
    </header>
  );
}