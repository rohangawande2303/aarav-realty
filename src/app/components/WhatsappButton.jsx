"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=7506929394&text=I%20came%20across%20your%20website%20,I%20would%20like%20to%20have%20more%20information%20about%20your%20business"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
