"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import project1Img1 from "../../images/kalyan-project1-1.jpeg";
import project1Img2 from "../../images/kalyan-project1-2.jpeg";
import project2Img1 from "../../images/kalyan-project2-1.jpg";
import project2Img2 from "../../images/kalyan-project2-2.jpg";
import project2Img3 from "../../images/kalyan-project2-3.jpg";
import project3Img1 from "../../images/kalyan-project3-1.jpg";
import project3Img2 from "../../images/kalyan-project3-2.jpg";
import project3Img3 from "../../images/kalyan-project3-3.jpg";
import project4Img1 from "../../images/kalyan-project4-1.jpg";
import project4Img2 from "../../images/kalyan-project4-2.jpg";
import project4Img3 from "../../images/kalyan-project4-3.jpg";
import project5Img1 from "../../images/kalyan-project5-1.jpg";
import project5Img2 from "../../images/kalyan-project5-2.jpg";
import project5Img3 from "../../images/kalyan-project5-3.jpg";
import project6Img1 from "../../images/kalyan-project6-1.jpg";
import project6Img2 from "../../images/kalyan-project6-2.jpg";
import project6Img3 from "../../images/kalyan-project6-3.jpg";

export default function Kalyanpage() {
  const router = useRouter();
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0, 0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projects = [
    {
      title: "Mangeshi Kalyan West",
      address: "Mangeshi Kalyan West, Thane, Kalyan, 421301, Maharashtra.",
      description:
        "Experience Serene Living at Mangeshi Group's Trinity in Kalyan West Discover a new era of sophisticated living with Mangeshi Group's latest offering, Trinity located in the serene surroundings of Vasant Valley Road, Kalyan West. Trinity is more than just a residential complex; it embodies luxury, comfort, and meticulous design. Registered under RERA, this project promises reliability and transparency, making it a trusted choice for homebuyers seeking a tranquil yet upscale lifestyle.",
      images: [project1Img1, project1Img2],
      link: "/property/Mangeshi-Kalyan-West",
    },
    {
      title: "Seasons Green",
      address:
        "2 bhk flat in kalyan west price, Thane, Kalyan, 421301, Maharashtra.",
      description: `Seasons Green is a luxurious residential project by Seasons Group, offering 1 and 2 BHK apartments in Kalyan West. The project is designed to provide a seamless blend of comfort, luxury, and natural beauty. With its RERA registration number P51700051575, the project is expected to be available for possession by the end of 2027. The apartments are thoughtfully curated to cater to the diverse needs of its residents, featuring contemporary architecture, spacious layouts, and elegant interiors. The project's prime location, meticulous design, and seamless connectivity make it an attractive choice for those seeking a peaceful and convenient living experience in Kalyan West
`,
      images: [project2Img1, project2Img2, project2Img3],
      link: "/property/Seasons-Green",
    },
    {
      title: "MID-TOWN GROUP",
      address:
        "Flats in kalyan Yogidham for sale, Thane, Kalyan, 421201, Maharashtra.",
      description: `Discover Your Dream Home: Flats in Kalyan Yogidham for Sale
Midtown W90 Luxury Apartments in Gauripada, Kalyan
In the dynamic world of real estate, where luxury, convenience, and lifestyle intersect, Midtown W90 stands as a beacon of world-class living. This exclusive residential enclave redefines comfortable living, offering an unmatched lifestyle in Kalyan. Nestled within a majestic 30-storeyed west-facing building, Midtown W90 showcases an array of exclusive features that elevate it above the rest.`,
      images: [project3Img1, project3Img2, project3Img3],
      link: "/property/flats-in-kalyan-Yogidham-for-Sale",
    },
    {
      title: "BALAJI AQUA Khadakpada, Kalyan",
      address:
        "Property In Kalyan West Near Railway Station, Thane, Kalyan, 421301, Maharashtra.",
      description: `Experience the epitome of urban living at Balaji Aqua: a prestigious landmark where luxury meets convenience, ideally located as a prime property in Kalyan West near the railway station. Rising majestically with its G+37 storeys, Balaji Aqua offers unparalleled panoramic views and a lifestyle crafted for those who appreciate the finer things in life. Choose from spacious 2, 3, and 4 BHK residences, each meticulously designed to blend comfort with elegance, ensuring every day feels extraordinary.`,
      images: [project4Img1, project4Img2, project4Img3],
      link: "/property/property-in-kalyan-west-near-railway-station",
    },
    {
      title: "BALAJI EXOTICA",
      address:
        "New Projects in Kalyan West Rambaug, Thane, Kalyan, 421301, Maharashtra.",
      description: `Explore Balaji Exotica: New Projects in Kalyan West Rambaug

If you’re in search of a comfortable and modern living space, Balaji Exotica in Kalyan West, Beyond Thane, is an ideal choice. This outstanding residential project, developed by Balaji World, offers luxurious 2 BHK and 4 BHK homes designed to provide a superior living experience. Spread across an expanse of 1 acre, Balaji Exotica features two meticulously crafted buildings with a total of 152 units. Each apartment is thoughtfully designed to cater to a variety of lifestyles, ensuring that every resident finds a home that perfectly suits their needs.

Balaji Exotica is not just about beautifully designed apartments; it also offers an impressive range of amenities to enhance your daily living. Residents can stay active with the on-site gymnasium, cycling, and jogging tracks, and unwind at the refreshing swimming pool. Families with children will appreciate the dedicated play area, while safety and convenience are prioritized with 24x7 security, fire protection systems, and power backup. The gated community also features closed car parking, providing added peace of mind. As one of the new projects in Kalyan West Rambaug, Balaji Exotica promises a blend of luxury, comfort, and security, making it a standout choice for discerning homebuyers.
`,
      images: [project5Img1, project5Img2, project5Img3],
      link: "/property/new-projects-in-kalyan-west-rambaug",
    },
    {
      title: "Tharwani Majestic Towers",
      address:
        "Tharwani Majestic Towers 3 Bhk, Thane, Kalyan, 421301, Maharashtra.",
      description: `Tharwani Majestic Towers by Tharwani Realty is an exceptional residential development, offering luxurious 2 BHK and 3 BHK apartments designed to provide the utmost comfort and elegance. Phase 1 of the project, with RERA ID P51700023841, features spacious 2 BHK apartments with a carpet area of 725.00 sq. ft. and expansive 3 BHK apartments with a carpet area of 1050.00 sq. ft., with possession starting in December 2024. Phase 2, with RERA ID P51700023872, offers 3 BHK apartments ranging from 818.0 to 832.0 sq. ft., with possession expected in December 2025. Each apartment is thoughtfully designed with large living spaces, modern kitchens, and high-quality fittings, ensuring a comfortable and stylish living experience.`,
      images: [project6Img1, project6Img2, project6Img3],
      link: "/property/tharwani-majestic-towers-3-bhk",
    },
    // {
    //   title: "BALAJI AQUA Khadakpada, Kalyan",
    //   address:
    //     "Property In Kalyan West Near Railway Station, Thane, Kalyan, 421301, Maharashtra.",
    //   description: `Experience the epitome of urban living at Balaji Aqua: a prestigious landmark where luxury meets convenience, ideally located as a prime property in Kalyan West near the railway station. Rising majestically with its G+37 storeys, Balaji Aqua offers unparalleled panoramic views and a lifestyle crafted for those who appreciate the finer things in life. Choose from spacious 2, 3, and 4 BHK residences, each meticulously designed to blend comfort with elegance, ensuring every day feels extraordinary.`,
    //   images: [project4Img1, project4Img2, project4Img3],
    //   link: "/property/property-in-kalyan-west-near-railway-station",
    // },
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
          <div className="carousel flex items-center justify-center md:w-1/2 relative overflow-hidden ">
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
// import project1 from "../../images/kal-project1.jpg";
// import project2 from "../../images/kal-project2.jpg";

// export default function Kalyanpage() {
//   return (
//     <div className="container mx-auto px-4 py-8 bg-white">
//       <h1 className="text-3xl font-bold mb-6 text-center">Kalyan Projects</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-8">
//         <div className="relative w-full h-80">
//           {" "}
//           {/* Set a fixed height */}
//           <Image
//             src={project1}
//             alt="Luxury Apartment Complex in Kalyan"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="flex flex-col justify-center items-start">
//           <h2 className="text-2xl font-semibold mb-2 text-black">
//             Luxury Apartment Complex
//           </h2>
//           <p className="text-black">
//             Experience modern living in our state-of-the-art luxury apartment
//             complex. Featuring spacious 2 and 3 BHK apartments, this project
//             offers amenities like a swimming pool, gym, and landscaped gardens.
//             Located in the heart of Kalyan, it provides easy access to schools,
//             shopping centers, and transportation.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//         <div className="relative w-full h-80">
//           {" "}
//           {/* Set a fixed height */}
//           <Image
//             src={project2}
//             alt="Eco-Friendly Townhouses in Kalyan"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="flex flex-col justify-center items-start">
//           <h2 className="text-2xl font-semibold mb-2 text-black">
//             Eco-Friendly Townhouses
//           </h2>
//           <p className="text-black">
//             Our eco-friendly townhouse project combines sustainable living with
//             comfort. These energy-efficient homes feature solar panels,
//             rainwater harvesting, and green spaces. With a focus on community
//             living, this project includes shared facilities like a community
//             hall and children play area, all within a secure, gated community.
//           </p>
//         </div>
//       </div>

//       <p className="text-lg text-center mt-8">
//         Discover these and more exciting real estate opportunities in Kalyan.
//         Contact us for more information or to schedule a visit.
//       </p>
//     </div>
//   );
// }
