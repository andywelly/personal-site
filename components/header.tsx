import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="p-4">
      {/* Navigation */}
      <nav className="relative z-10 p-10 flex items-center justify-between">
        {/* Logo or Image on the Left */}
        <Link
          href="/"
          className=""
        >
          <Image
            src="/vercel.svg" // Path to the image in the public folder
            alt="Vercel Logo"
            width={50} // Initial width
            height={50} // Initial height
            className="rounded transform hover:scale-150 transition-transform duration-300" // Scale effect on hover
          />
        </Link>

        {/* Navigation Links on the Right */}
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