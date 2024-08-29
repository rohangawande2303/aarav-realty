"use client";

import React from "react";
import Image from "next/image";
import featuredProjectImage from "../../images/featured-project1.jpg";
import featuredProjectImageMobile from "../../images/featured-project-mobile.jpg"; // Add a mobile-specific image

export default function FeaturedProject() {
  return (
    <div
      id="featured-projects"
      className="p-6 md:p-12 lg:p-16 bg-gray-200 flex flex-col md:flex-row items-center justify-center"
      style={{ minHeight: "80vh" }} // Adjust this value to control the overall height
    >
      <div className="w-full md:w-1/2 h-[60vh] md:h-[50vh] p-6 md:p-8 lg:p-12 flex items-center justify-center">
        <div className="relative w-full h-full rounded-lg shadow-lg overflow-hidden">
          <Image
            src={featuredProjectImage}
            alt="Featured Project"
            layout="fill"
            objectFit="cover"
            className="hidden md:block rounded-lg" // Hidden on mobile, shown on medium and larger devices
          />
          <Image
            src={featuredProjectImageMobile}
            alt="Featured Project Mobile"
            layout="fill"
            objectFit="cover"
            className="block md:hidden rounded-lg" // Shown on mobile, hidden on medium and larger devices
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 text-black text-center md:text-left">
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
