"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import project1Img1 from "../../images/dom-project1-1.jpg";
import project1Img2 from "../../images/dom-project1-2.jpg";
import project2Img1 from "../../images/dom-project2-1.jpeg";
import project2Img2 from "../../images/dom-project2-2.jpeg";
import project2Img3 from "../../images/dom-project2-3.jpeg";
import project3Img1 from "../../images/dom-project3-1.jpg";
import project3Img2 from "../../images/dom-project3-2.jpg";
import project3Img3 from "../../images/dom-project3-3.jpg";
import project4Img1 from "../../images/dom-project4-1.jpg";
import project4Img2 from "../../images/dom-project4-2.jpg";
import project4Img3 from "../../images/dom-project4-3.jpg";

export default function DombivliPage() {
  const router = useRouter();
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0, 0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projects = [
    {
      title: "Balaji Estate C3 in Dombivli East",
      address: "Near Manpada Road, Thane, Dombivli, 421203, Maharashtra.",
      description: `Balaji Estate C3 in Dombivli offers a blend of modern architecture and comfortable living. This residential project is designed to provide residents with a tranquil and vibrant environment. The spacious apartments are crafted with attention to detail, ensuring optimal use of space and natural light. Equipped with top-notch amenities and facilities, Balaji Estate C3 caters to the needs of both families and individuals. The community is secure, with round-the-clock security measures in place. Experience a lifestyle of convenience and luxury at Balaji Estate C3.`,
      images: [project1Img1, project1Img2],
      link: "/property/balaji-estate-c3",
    },
    {
      title: "Passcode L3 Living Balaji Classica",
      address: "Diva Manpada Rd, Thane, Dombivli, 421201, Maharashtra.",
      description: `Discover the Symphony of Urban Sophistication with L3 Living at Balaji Classica. Situated in the heart of Dombivli, this development epitomizes the seamless convergence of luxury, lifestyle, and location. L3 Living presents an extraordinary opportunity for those who refuse to settle for anything less than the best.`,
      images: [project2Img1, project2Img2, project2Img3],
      link: "/property/passcode-l3-living",
    },
    {
      title: "Venus Skky City LA Vista",
      address:
        "Dombivli East, Next to Jain Temple, Thane, Dombivli, 400612, Maharashtra.",
      description: `Venus Skky City is a luxurious residential venture by Venus Nirvana and S S Lifespaces; spread over 20 acres of lush green land, it is a RERA registered project. Venus Nirvana are launching the phase 1 of the venture called Aristo housing majestic tower with 28 storeys filled with 300+ units of 1 BHK & 2 BHK spacious apartments.`,
      images: [project3Img1, project3Img2, project3Img3],
      link: "/property/venus-skky-city",
    },
    {
      title: "Swaminarayan City",
      address:
        "Dombivli West, Mothagaon, Thane, Dombivli, 421202, Maharashtra.",
      description: `Swaminarayan City is a majestic project by Swaminarayan Groups, a RERA registered project. Spread over 140 acres of lush greenery and with a gorgeous view of Ulhas River, Swaminarayan City is filled with 1 BHK, 2 BHK, & 3 BHK lavishly spacious luxurious flats for sale in Dombivli, with best-in-class amenities.`,
      images: [project4Img1, project4Img2, project4Img3],
      link: "/property/swaminarayan-city",
    },
  ];

  const handleImageClick = (link) => {
    router.push(link);
  };

  const nextImage = useCallback(
    (projectIndex) => {
      setCurrentIndexes((prevIndexes) =>
        prevIndexes.map((index, i) =>
          i === projectIndex
            ? (index + 1) % projects[projectIndex].images.length
            : index
        )
      );
    },
    [projects]
  );

  const prevImage = useCallback(
    (projectIndex) => {
      setCurrentIndexes((prevIndexes) =>
        prevIndexes.map((index, i) =>
          i === projectIndex
            ? (index - 1 + projects[projectIndex].images.length) %
              projects[projectIndex].images.length
            : index
        )
      );
    },
    [projects]
  );

  useEffect(() => {
    if (isMounted) {
      const intervals = projects.map((_, i) =>
        setInterval(() => nextImage(i), 4000)
      );

      return () => intervals.forEach(clearInterval);
    }
  }, [isMounted, nextImage, projects]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="project-container max-w-screen-xl mx-auto pt-28">
      {projects.map((project, projectIndex) => (
        <div
          key={projectIndex}
          className="project-card p-4 flex flex-col md:flex-row items-center mb-12"
        >
          <div className="carousel flex items-center justify-center md:w-1/2 relative overflow-hidden">
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
                    className="carousel-image object-cover w-full h-auto"
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

// import Image from "next/image";
// import project1 from "../../images/dom-project1.jpg";
// import project2 from "../../images/dom-project2.jpg";

// export default function DombivliPage() {
//   return (
//     <div className="container mx-auto px-4 py-8 bg-white">
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         Dombivali Projects
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-8">
//         <div className="relative w-full h-80">
//           {/* Set a fixed height */}
//           <Image
//             src={project1}
//             alt="Luxury Apartment Complex in Dombivali"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="flex flex-col justify-center items-start">
//           <h2 className="text-2xl font-semibold mb-2 text-black">
//             Balaji Estate C3 in Dombivli East
//           </h2>
//           <p className="text-gray-500 mb-4">
//             Near Manpada Road, Thane, Dombivli, 421203, Maharashtra.
//           </p>
//           <p className="text-black">
//             Balaji Estate C3 in Dombivli offers a blend of modern architecture
//             and comfortable living. This residential project is designed to
//             provide residents with a tranquil and vibrant environment. The
//             spacious apartments are crafted with attention to detail, ensuring
//             optimal use of space and natural light. Equipped with top-notch
//             amenities and facilities, Balaji Estate C3 caters to the needs of
//             both families and individuals. The community is secure, with
//             round-the-clock security measures in place. Experience a lifestyle
//             of convenience and luxury at Balaji Estate C3.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//         <div className="relative w-full h-80">
//           {/* Set a fixed height */}
//           <Image
//             src={project2}
//             alt="Eco-Friendly Townhouses in Dombivali"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="flex flex-col justify-center items-start">
//           <h2 className="text-2xl font-semibold mb-2 text-black">
//             Passcode L3 Living Balaji Classica
//           </h2>
//           <p className="text-gray-500 mb-4">
//             Diva Manpada Rd, Thane, Dombivli, 421201, Maharashtra.
//           </p>
//           <p className="text-black">
//             Discover the Symphony of Urban Sophistication with L3 Living at
//             Balaji Classica Introduction to L3 Living In a world where
//             excellence is the standard, finding a residence that resonates with
//             your aspirations can be a challenge. For those who refuse to settle
//             for anything less than the best, L3 Living at Balaji Classica
//             presents an extraordinary opportunity. Situated in the heart of
//             Dombivli, this development epitomizes the seamless convergence of
//             luxury, lifestyle, and location.
//           </p>
//         </div>//
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-8">
//         <div className="relative w-full h-80">
//           {/* Set a fixed height */}
//           <Image
//             src={project1}
//             alt="Luxury Apartment Complex in Dombivali"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="flex flex-col justify-center items-start">
//           <h2 className="text-2xl font-semibold mb-2 text-black">
//             Venus Skky City LA Vista
//           </h2>
//           <p className="text-gray-500 mb-4">
//             Dombivli East, Next to Jain Temple, Thane, Dombivli, 400612,
//             Maharashtra.
//           </p>
//           <p className="text-black">
//             Venus Skky City is a luxurious residential venture by Venus Nirvana
//             and S S Lifespaces; spread over 20 acres of lush green land is a
//             RERA registered project with RERA ID P51700048407. It will start the
//             possession by mid of 2026. Venus Nirvana are launching the phase 1
//             of the venture it is called Aristo housing majestic tower with 28
//             storey filled with 300+ units of 1 BHK & 2 BHK spacious apartments
//             for sale Elevation- Ground + 26 Habitable floor, not just that there
//             are commercial spaces for sale too. The Venus Skky City is filled
//             with ample of indulgences which will help you lead a healthy and
//             relaxed lifestyle. The amenities are for everyone from kids to the
//             elders in your family.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-8">
//         <div className="relative w-full h-80">
//           {/* Set a fixed height */}
//           <Image
//             src={project1}
//             alt="Luxury Apartment Complex in Dombivali"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="flex flex-col justify-center items-start">
//           <h2 className="text-2xl font-semibold mb-2 text-black">
//             Swaminarayan City
//           </h2>
//           <p className="text-gray-500 mb-4">
//             Dombivli West, Mothagaon, Thane, Dombivli, 421202, Maharashtra.
//           </p>
//           <p className="text-black">
//             Swaminarayan City is a majestic project by Swaminarayan Groups, a
//             RERA registered project with RERA number P51700018305. Spread over
//             140 acres of lush greenery and with a gorgeous view of Ulhas River,
//             Swaminarayan City is filled with 1 BHK, 2 BHK, & 3 BHK lavishly
//             spacious luxurious flats for sale in Dombivli, with best-in-class
//             amenities all over the project with the key feature of being in
//             nature and viewing greenery and the beautiful flowing Ulhas River.
//             Swaminarayan City will also have the biggest Swaminarayan temple in
//             Maharashtra, keeping the spirituality of people high. Swaminarayan
//             City is a strategically located project in Dombivli.
//           </p>
//         </div>
//       </div>

//       <p className="text-lg text-center mt-8">
//         Discover these and more exciting real estate opportunities in Dombivali.
//         Contact us for more information or to schedule a visit.
//       </p>
//     </div>
//   );
// }
