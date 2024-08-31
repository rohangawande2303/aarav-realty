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
    <nav className="bg-white text-black pt-2 pb-2 md:p-4 flex items-center justify-between md:justify-around fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex items-center pl-4">
        <Link
          href="/"
          className="cursor-pointer flex items-center"
          onClick={(e) => handleScroll(e, "#home")}
        >
          <Image
            priority
            src={logo}
            alt="Logo"
            width={70} // Original size
            height={50} // Original size
            className="w-16 h-12 md:w-16 md:h-12" // Responsive size adjusted back to original
          />
          <span className="text-black text-xl ml-2 hidden md:inline">
            Aarav Realty
          </span>
        </Link>
      </div>
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
          {" "}
          {/* Adjusted margin-left for closer spacing */}
          <button onClick={toggleMenu} className="text-black">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && <HamburgerMenu onClose={toggleMenu} />}
    </nav>
  );
}

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { FaBars, FaWhatsapp } from "react-icons/fa";
// import HamburgerMenu from "./HamburgerMenu";
// import Image from "next/image";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white p-4 flex items-center justify-between">
//       <div className="flex items-center">
//         <Link className="cursor-pointer" href="/">
//           <Image
//             priority
//             src="/images/logo1.png"
//             alt="Logo"
//             width={90}
//             height={90}
//             className="w-10 h-10 md:w-16 md:h-16"
//           />
//         </Link>
//         <Link href="/" className="text-white text-xl md:text-2xl ml-3">
//           Aarav Realty
//         </Link>
//       </div>
//       <div className="hidden md:flex flex-grow justify-center space-x-4">
//         <Link href="/">Home</Link>
//         <Link href="/about">About Us</Link>
//         <Link href="#projects">Projects</Link>
//         <Link href="#featured-projects">Featured Projects</Link>
//         <Link href="#contact">Contact</Link>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="hidden md:flex">
//           <Link
//             href="https://wa.me/yourwhatsappnumber"
//             className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
//           >
//             <FaWhatsapp size={24} />
//           </Link>
//         </div>
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             <FaBars size={24} />
//           </button>
//         </div>
//       </div>
//       {menuOpen && <HamburgerMenu />}
//     </nav>
//   );
// }
