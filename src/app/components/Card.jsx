"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Card({ title, link }) {
  const imageSrc = `/images/${title.toLowerCase()}.jpg`;

  return (
    <div className="flex justify-center w-full">
      <Link href={link}>
        <div className="relative w-[21rem] h-[21rem] sm:w-[21rem] sm:h-[21rem] md:w-[45vw] md:h-[50vh] lg:w-[25vw] lg:h-[50vh] bg-gray-100 border p-2 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer overflow-hidden">
          {/* Image */}
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />

          {/* Text positioned at the bottom center */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
