"use client";
import React, { useState } from "react";
import Image from "next/image";
// import Link from "next/link";

const NavBar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };
  return (
    <>
      <nav className="bg-[#0c6268] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/">
            <Image
              src="/LOGO.png"
              alt="Logo"
              width={80}
              height={40}
              className="h-10 w-auto"
            />
          </a>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {/* Use Next.js Link with passHref option */}
              <a
                href="/about"
                className="text-[#fcba63] hover:bg-[#fcba63] hover:text-[#e44044] rounded-lg p-2"
              >
                About
              </a>
              {/* Use Next.js Link with passHref option */}
              <a
                href="/contact"
                className="text-[#fcba63] hover:bg-[#fcba63] hover:text-[#e44044] rounded-lg p-2"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-[#fcba63] md:text-[#fcba63] hover:text-[#fcba63] 
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#fcba63]"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/about"
                className="text-[#fcba63] block hover:bg-[#fcba63] hover:text-[#e44044] rounded-lg p-2"
              >
                About
              </a>
              {/* Use Next.js Link with passHref option */}
              <a
                href="/contact"
                className="text-[#fcba63] block hover:bg-[#fcba63] hover:text-[#e44044] rounded-lg p-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
