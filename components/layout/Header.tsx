import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isFloating, setIsFloating] = useState(false);

  // Detect scroll movement
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // If user is scrolling down
      if (currentScroll > 60 && currentScroll > lastScroll) {
        setIsFloating(true);
      }

      // If user scrolls back up to top
      if (currentScroll <= 60) {
        setIsFloating(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white shadow-md p-4 flex justify-between items-center transition-all duration-300 z-50 w-full ${
        isFloating ? "fixed top-0 left-0 bg-opacity-90 backdrop-blur-md" : "relative"
      }`}
    >
      {/* Logo and title */}
      <div className="flex items-center gap-2 text-xl font-bold">
        <Image src="/assets/logo.png" alt="Logo" width={32} height={32} />
        <span>LuxStays</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full shadow-inner">
        <input
          type="text"
          placeholder="Search..."
          className="border px-2 py-1 rounded-full text-sm"
        />
        <Link href="#">
          <span className="text-blue-600 hover:underline">Sign In</span>
        </Link>
        <Link href="#">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600">
            Sign Up
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
