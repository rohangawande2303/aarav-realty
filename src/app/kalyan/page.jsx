"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { kalyanData } from "./data/data"; // Ensure the correct import path

export default function Kalyanpage() {
  const router = useRouter();

  // Debugging: Check if kalyanData is loaded
  useEffect(() => {
    console.log("kalyanData:", kalyanData);
  }, []);

  // Safely initialize currentIndexes
  const [currentIndexes, setCurrentIndexes] = useState(
    kalyanData && Array.isArray(kalyanData)
      ? new Array(kalyanData.length).fill(0)
      : []
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageClick = (link) => {
    router.push(link);
  };

  const nextImage = useCallback((projectIndex) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? (index + 1) % kalyanData[projectIndex]?.images.length
          : index
      )
    );
  }, []);

  const prevImage = useCallback((projectIndex) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? (index - 1 + kalyanData[projectIndex]?.images.length) %
            kalyanData[projectIndex]?.images.length
          : index
      )
    );
  }, []);

  useEffect(() => {
    if (isMounted && Array.isArray(kalyanData) && kalyanData.length > 0) {
      const intervals = kalyanData.map((_, i) =>
        setInterval(() => nextImage(i), 4000)
      );

      return () => intervals.forEach(clearInterval);
    }
  }, [isMounted, nextImage]);

  if (!isMounted || !Array.isArray(kalyanData) || kalyanData.length === 0) {
    return <div>Loading...</div>; // Add a fallback while data is being loaded or if data is unavailable
  }

  return (
    <div className="project-container max-w-screen-xl mx-auto pt-28">
      {kalyanData.map((project, projectIndex) => (
        <div
          key={projectIndex}
          className="project-card p-4 flex flex-col md:flex-row items-center mb-12 border border-gray-200 rounded-lg shadow-md"
        >
          <div className="carousel flex items-center justify-center md:w-1/2 relative overflow-hidden pb-8 md:pb-0">
            <div
              className="carousel-inner flex transition-transform duration-500 ease-in-out"
              style={{
                width: "100%",
                transform: `translateX(-${
                  currentIndexes[projectIndex] * 100
                }%)`,
              }}
            >
              {project.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="carousel-item flex-shrink-0 w-full"
                  style={{ width: "100%" }}
                >
                  <Image
                    src={img}
                    alt={`Project ${projectIndex + 1} Image ${imgIndex + 1}`}
                    width={500} // Adjusted width
                    height={300} // Adjusted height
                    className="carousel-image object-cover w-full h-auto rounded-lg"
                    onClick={() => handleImageClick(project.link)}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => prevImage(projectIndex)}
              className="carousel-button absolute left-2 text-white text-2xl p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              &lt;
            </button>
            <button
              onClick={() => nextImage(projectIndex)}
              className="carousel-button absolute right-2 text-white text-2xl p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              &gt;
            </button>
          </div>
          <div className="md:w-1/2 ml-4">
            <h2 className="text-black text-xl font-bold mb-2">
              {project.title}
            </h2>
            <p className="text-black mb-1">{project.address}</p>
            <p className="text-black mb-4">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
