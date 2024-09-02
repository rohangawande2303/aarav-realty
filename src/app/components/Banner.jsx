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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint for mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize();

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
      className={`relative w-full ${
        isMobile
          ? "h-[100vh]"
          : "h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[93vh]"
      } mt-0`}
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

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import sample1 from "../../images/banner-1.jpg";
// import sample2 from "../../images/banner-2.jpg";
// import sample3 from "../../images/sample3.jpg";

// const images = [sample1, sample2, sample3];

// const Banner = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000); // Change image every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[100vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh]">
//       <div className="absolute inset-0 w-full h-full">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             } transition-opacity duration-1000`}
//           >
//             <Image
//               src={image}
//               alt={`Slide ${index + 1}`}
//               layout="fill"
//               objectFit="cover"
//               priority={index === 0}
//               className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;
