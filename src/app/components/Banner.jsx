"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import sample1 from "../../images/banner-1.jpg";
import sample2 from "../../images/banner-2.jpg";
import sample3 from "../../images/banner-3.jpg";
import mobile1 from "../../images/mob-banner-1.jpg";
import mobile2 from "../../images/mob-banner-2.jpg";
import mobile3 from "../../images/mob-banner-3.jpg";

const desktopImages = [sample1, sample2, sample3];
const mobileImages = [mobile1, mobile2, mobile3];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [bannerHeight, setBannerHeight] = useState("100vh");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint for mobile
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      setBannerHeight(`calc(100vh - ${navbarHeight + 2}px)`); // Subtract 2 additional pixels
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial height

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) %
          (isMobile ? mobileImages.length : desktopImages.length)
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  const imagesToShow = isMobile ? mobileImages : desktopImages;

  return (
    <div
      className={`relative w-full mt-0 overflow-hidden`}
      style={{ height: bannerHeight }}
    >
      <div className="absolute inset-0 w-full h-full">
        {imagesToShow.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
              className="w-full h-full object-cover sm:object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
