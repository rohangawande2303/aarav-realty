"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import featuredProjectImage1 from "../../images/featured-project1.jpg";
import featuredProjectImage1Mobile from "../../images/featured-project-mobile.jpg";
import featuredProjectImage2 from "../../images/featured-project-2.jpg";
import featuredProjectImage2Mobile from "../../images/featured-project-2-mob.jpg";

const projects = [
  {
    desktopImage: featuredProjectImage1,
    mobileImage: featuredProjectImage1Mobile,
    description:
      "Swaminarayan City envisions providing a quality experience to its customers by being at the top of its game as a real estate partner one can trust in the residential sector. We aim to provide a seamless blend of modernity and lifestyle through our neo-classical architecture premium 1, 2 & 3 BHK residence with sundecks at Nav Dombivili, Dombivili (W). Spreading our wings across 100 acres of land with a grand and successful completion of 3 towers. We are MahaRERA registered and have exceptional connectivity with accessibility. Feel rejuvenated in the divine aura with upcoming Swaminarayan temple to be developed by Swaminarayan trust, while being serenaded by the serene view of Ulhas river.",
  },
  {
    desktopImage: featuredProjectImage2,
    mobileImage: featuredProjectImage2Mobile,
    description:
      "Discover the perfect blend of comfort and modern living with our second featured project. Located in a prime area, it offers excellent amenities and is designed to meet all your lifestyle needs. Enjoy a serene environment while being close to urban conveniences. This project exemplifies quality and innovation in the real estate sector.",
  },
];

export default function FeaturedProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setFadeClass("fade-in");
      }, 500); // Match the duration of the fade-out animation
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { desktopImage, mobileImage, description } = projects[currentIndex];

  return (
    <div
      id="featured-projects"
      className="p-6 md:p-12 lg:p-16 bg-gray-200 flex flex-col md:flex-row items-center justify-center"
      style={{ minHeight: "80vh" }} // Fixed minimum height for consistent background size
    >
      <div className="w-full md:w-1/2 h-[80vh] md:h-[60vh] p-4 md:p-8 lg:p-12 flex items-center justify-center">
        <div className="relative w-full h-full max-w-full max-h-full rounded-lg shadow-lg overflow-hidden">
          <Image
            src={desktopImage}
            alt="Featured Project"
            layout="fill"
            objectFit="contain" // Use contain to fit image within the container
            className={`hidden md:block rounded-lg ${fadeClass}`} // Hidden on mobile, shown on medium and larger devices
          />
          <Image
            src={mobileImage}
            alt="Featured Project Mobile"
            layout="fill"
            objectFit="contain" // Use contain to fit image within the container
            className={`block md:hidden rounded-lg ${fadeClass}`} // Shown on mobile, hidden on medium and larger devices
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 text-black text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          Featured Project
        </h2>
        <p className={`text-base md:text-lg leading-relaxed ${fadeClass}`}>
          {description}
        </p>
      </div>
      <style jsx>{`
        .fade-in {
          opacity: 1;
          transition: opacity 0.5s ease-in;
        }
        .fade-out {
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
