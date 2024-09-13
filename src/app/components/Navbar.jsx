"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";
import logo from "../../images/aarav-realty-logo.png";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = (e, target) => {
    e.preventDefault();
    if (router.pathname !== "/") {
      setScrollTarget(target);
      router.push("/");
    } else {
      scrollToTarget(target);
    }
  };

  const scrollToTarget = (target) => {
    if (target === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (scrollTarget) {
      scrollToTarget(scrollTarget);
      setScrollTarget(null);
    }
  }, [router.pathname, scrollTarget]);

  return (
    <nav className="bg-white text-black pt-2 pb-2 md:p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="cursor-pointer flex items-center pl-4 md:pl-0"
          onClick={(e) => handleScroll(e, "#home")}
        >
          <Image
            priority
            src={logo}
            alt="Logo"
            width={64} // Maintains aspect ratio
            height={64} // Maintains aspect ratio
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" // Responsive sizes for different screens
          />
          <span className="text-black text-base sm:text-lg md:text-xl ml-2 hidden md:inline">
            Aarav Realty
          </span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            scroll={false}
            onClick={(e) => handleScroll(e, "#home")}
            className="hover:text-gray-600 hover:underline transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            scroll={false}
            className="hover:text-gray-600 hover:underline transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="#projects"
            scroll={false}
            onClick={(e) => handleScroll(e, "#projects")}
            className="hover:text-gray-600 hover:underline transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="#featured-projects"
            scroll={false}
            onClick={(e) => handleScroll(e, "#featured-projects")}
            className="hover:text-gray-600 hover:underline transition-colors duration-300"
          >
            Featured Projects
          </Link>
          <Link
            href="#contact"
            scroll={false}
            onClick={(e) => handleScroll(e, "#contact")}
            className="hover:text-gray-600 hover:underline transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="https://api.whatsapp.com/send?phone=7506929394&text=I%20came%20across%20your%20website%20,I%20would%20like%20to%20have%20more%20information%20about%20your%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hidden md:flex items-center hover:bg-green-600 transition-colors duration-300"
          >
            <FaWhatsapp className="mr-2" />
            WhatsApp
          </Link>
          <div className="md:hidden ml-4 pr-8">
            <button onClick={toggleMenu} className="text-black">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && <HamburgerMenu onClose={toggleMenu} />}
      </div>
    </nav>
  );
}
