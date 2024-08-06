"use client";

import React from "react";
import Image from "next/image";
import featuredProjectImage from "../../images/featured-projects.jpg";

export default function FeaturedProject() {
  return (
    <div
      id="featured-projects"
      className="p-4 bg-gray-200 flex flex-col md:flex-row items-center justify-center"
    >
      <div className="w-full h-[40vh] md:h-[60vh] p-4 flex items-center justify-center">
        <div className="relative w-full h-full rounded-lg shadow-lg transform">
          <Image
            src={featuredProjectImage}
            alt="Featured Project"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="w-full p-4 md:p-8 text-black text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          Featured Project
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          Swaminarayan City envisions providing a quality experience to its
          customers by being at the top of its game as a real estate partner one
          can trust in the residential sector. We aim to provide a seamless
          blend of modernity and lifestyle through our neo-classical
          architecture premium 1, 2 & 3 BHK residence with sundecks at Nav
          Dombivili, Dombivili (W). Spreading our wings across 100 acres of land
          with a grand and successful completion of 3 towers. We are MahaRERA
          registered and have exceptional connectivity with accessibility. Feel
          rejuvenated in the divine aura with upcoming Swaminarayan temple to be
          developed by Swaminarayan trust, while being serenaded by the serene
          view of Ulhas river.
        </p>
      </div>
    </div>
  );
}
