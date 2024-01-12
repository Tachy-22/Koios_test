"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/", text: "Engineering" },
    { path: "/", text: "Software" },
    { path: "/", text: "Edu-tech" },
    { path: "/ ", text: "About Us" },
    { path: "/ ", text: "Careers" },
  ];

  return (
    <div className="md:hidden block max-w-screen ">
      <button
        onClick={toggleMobileMenu}
        className="block md:hidden text-gray-500 focus:outline-none text-3xl h-full"
      >
        {!isMobileMenuOpen ? " ☰" : "  ✕"}
      </button>
      <div
        className={`absolute  backdrop-blur-3xl backdrop-brightness-50 top-20 left-0   bg-blue-00/80 z-40  flex items-center justify-center transition-transform duration-300 ease-in-out w-screen ${
          isMobileMenuOpen ? "" : "-translate-y-[200%] "
        }`}
      >
        <ul className="flex  flex-col items-center py-[1rem] h-full w-full backdrop-blur-3xl bg-blue-00/80">
          {navLinks.map((link, index) => (
            <li key={index} className=" w-full text-center py-[1rem] ">
              <Link
                onClick={toggleMobileMenu}
                className="text-sm text-gray-100 w-full  hover:underline underline-offset-2 hover:border-b hover:border-b-blue-300"
                href={link.path}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Close Button for Mobile Menu */}
      </div>
    </div>
  );
};

export default MobileMenu;
