// src/components/ui/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent py-4 absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/assets/logo-tpt.png" alt="Logo" width={50} height={50} />
        </Link>
        <div className="flex-grow flex justify-center">
          <Image
            src="/assets/0.png" // Replace with the path to your image
            alt="Middle Image"
            width={500} // Adjust width as needed
            height={50} // Adjust height as needed
            objectFit="contain"
            className="ml-32" // Adjust this value to shift the image to the right
          />
        </div>
        <div className="hidden md:flex space-x-6 ml-10"> {/* Added ml-8 to shift links to the left */}
          <Link href="/" className="text-black hover:text-red">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-red">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-red">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-transparent py-4 absolute top-full left-0 w-full z-10">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
