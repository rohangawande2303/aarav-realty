"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { dombivliData } from "./data/data";

export default function DombivliPage() {
  const router = useRouter();
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0, 0]);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageClick = useCallback(
    (link) => {
      router.push(`/dombivli/${link}`); // Ensure the URL matches the dynamic route
    },
    [router]
  );

  const nextImage = useCallback((projectIndex) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? (index + 1) % (dombivliData[projectIndex]?.images?.length || 1)
          : index
      )
    );
  }, []);

  const prevImage = useCallback((projectIndex) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? (index - 1 + (dombivliData[projectIndex]?.images?.length || 1)) %
            (dombivliData[projectIndex]?.images?.length || 1)
          : index
      )
    );
  }, []);

  useEffect(() => {
    if (isMounted && Array.isArray(dombivliData) && dombivliData.length > 0) {
      const intervals = dombivliData.map((_, i) =>
        setInterval(() => nextImage(i), 4000)
      );

      return () => intervals.forEach(clearInterval);
    }
  }, [isMounted, nextImage]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="project-container max-w-screen-xl mx-auto pt-28">
      {dombivliData.map((project, projectIndex) => (
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
              {project.images && project.images.length > 0 ? (
                project.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="carousel-item flex-shrink-0 w-full"
                    style={{ width: "100%" }}
                  >
                    <Image
                      src={img}
                      alt={`Project ${projectIndex + 1} Image ${imgIndex + 1}`}
                      width={500}
                      height={300}
                      className="carousel-image object-cover w-full h-auto rounded-lg pb-4"
                      onClick={() => handleImageClick(project.link)}
                    />
                  </div>
                ))
              ) : (
                <div>No images available</div>
              )}
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
            <p className="text-black mb-1">
              <strong>Address:</strong> {project.address}
            </p>
            <p className="text-black mb-4">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
