"use client";

import React from "react";
import Link from "next/link";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

export default function HamburgerMenu({ onClose }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white text-black p-4 z-50 shadow-lg">
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-black">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/" onClick={onClose} className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" onClick={onClose} className="hover:text-gray-600">
            About Us
          </Link>
          <Link
            href="#projects"
            onClick={onClose}
            className="hover:text-gray-600"
          >
            Projects
          </Link>
          <Link
            href="#featured-projects"
            onClick={onClose}
            className="hover:text-gray-600"
          >
            Featured Projects
          </Link>
          <Link
            href="#contact"
            onClick={onClose}
            className="hover:text-gray-600"
          >
            Contact
          </Link>
          <Link
            href="https://wa.me/yourwhatsappnumber"
            className="inline-flex items-center justify-center bg-green-500 text-white p-2 rounded-full hover:bg-green-600 w-10 h-10"
            onClick={onClose}
          >
            <FaWhatsapp size={20} />
          </Link>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
    </>
  );
}
