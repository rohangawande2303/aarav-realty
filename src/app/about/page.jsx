import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
// import companyImage from "../../images/company.jpg";
import founderImage from "../../images/founder.jpg";
import logo from "../../images/aarav-realty-logo.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pt-8">
            <div className="relative w-full md:w-1/3 h-64 md:h-96">
              <Image
                // src={companyImage}
                src={logo}
                alt="Our Company"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left text-black">
              <h2 className="text-2xl font-semibold mb-2 ">Our Company</h2>
              <p>
                We are a leading real estate company, dedicated to providing
                exceptional service and delivering the best results for our
                clients. Our portfolio includes residential, commercial, and
                mixed-use properties that embody excellence and innovation in
                real estate.
              </p>
            </div>
          </div>
        </div>

        {/* <div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative w-full md:w-1/3 h-64 md:h-80">
              <Image
                src={founderImage}
                alt="Our Founder"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left text-black">
              <h2 className="text-2xl font-semibold mb-2">Our Founder</h2>
              <p>
                Meet our founder, John Doe, who brings over two decades of
                experience in the real estate industry. With a passion for
                excellence and a vision for success, John leads our team with
                dedication and expertise.
              </p>
            </div>
          </div>
        </div> */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
