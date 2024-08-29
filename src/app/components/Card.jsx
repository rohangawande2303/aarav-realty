"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

export default function Card({ title, link }) {
  const imageSrc = `/images/${title.toLowerCase()}.jpg`;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={classNames(
        "flex flex-col items-center transition-transform duration-700",
        {
          "md:translate-x-0 md:opacity-100": isVisible,
          "md:-translate-x-full md:opacity-0": !isVisible && title === "Kalyan",
          "md:translate-x-full md:opacity-0":
            !isVisible && title === "Dombivali",
        }
      )}
    >
      <Link href={link}>
        <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gray-100 border p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={384}
            height={384}
            objectFit="cover"
            className="rounded-lg"
            onError={() => console.error(`Failed to load image: ${imageSrc}`)}
          />
        </div>
      </Link>
      <h2 className="text-lg md:text-xl mt-4 text-black">{title}</h2>
    </div>
  );
}

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import classNames from "classnames";

// export default function Card({ title, link }) {
//   const imageSrc = `/images/${title.toLowerCase()}.jpg`;
//   const [isVisible, setIsVisible] = useState(false);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) {
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//         observer.unobserve(cardRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={classNames(
//         "flex flex-col items-center transition-transform duration-700",
//         {
//           "md:translate-x-0 md:opacity-100": isVisible,
//           "md:-translate-x-full md:opacity-0": !isVisible && title === "Kalyan",
//           "md:translate-x-full md:opacity-0":
//             !isVisible && title === "Dombivali",
//         }
//       )}
//     >
//       <Link href={link}>
//         <div className="relative w-96 h-96 bg-gray-100 border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer overflow-hidden">
//           <Image
//             src={imageSrc}
//             alt={title}
//             width={384} // Increased size
//             height={384} // Increased size
//             objectFit="cover"
//             className="rounded-lg"
//             onError={() => console.error(`Failed to load image: ${imageSrc}`)}
//           />
//         </div>
//       </Link>
//       <h2 className="text-xl mt-4 text-black">{title}</h2>
//     </div>
//   );
// }
