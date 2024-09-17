"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { dombivliData } from "./data/data";
import ContactForm from "../components/ContactForm";
import useMediaQuery from "../components/useMediaQuery";

export default function DombivliPage() {
  const router = useRouter();
  const [currentIndexes, setCurrentIndexes] = useState(
    dombivliData && Array.isArray(dombivliData)
      ? new Array(dombivliData.length).fill(0)
      : []
  );
  const [isMounted, setIsMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageClick = (project) => {
    if (isMobile) {
      const whatsappLink =
        "https://api.whatsapp.com/send?phone=7506929394&text=I%20came%20across%20your%20website%20,I%20would%20like%20to%20have%20more%20information%20about%20your%20business";
      window.open(whatsappLink, "_blank");
    } else {
      setSelectedProject(project);
      setShowForm(true);
      setBlurBackground(true);
    }
  };

  const closeForm = () => {
    setShowForm(false);
    setBlurBackground(false);
  };

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

  if (!isMounted || !Array.isArray(dombivliData) || dombivliData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        className={`project-container max-w-screen-xl mx-auto pt-28 ${
          blurBackground ? "blur-sm" : ""
        }`}
      >
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
                        alt={`Project ${projectIndex + 1} Image ${
                          imgIndex + 1
                        }`}
                        width={500}
                        height={300}
                        className="carousel-image object-cover w-full h-auto rounded-lg"
                        onClick={() => handleImageClick(project)}
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

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 popup-container">
          {/* Blur Background */}
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>

          {/* Popup Content */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-[23rem] md:max-w-[23rem] lg:max-w-[23rem] xl:max-w-[25rem] z-60">
            <button
              className="absolute top-4 right-4 text-black text-lg"
              onClick={closeForm}
            >
              &times;
            </button>
            {/* Pass showDetails={false} prop to the ContactForm */}
            <ContactForm showDetails={false} />
          </div>
        </div>
      )}
    </div>
  );
}
