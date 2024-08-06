// pages/kalyan.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Kalyan = () => {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl">Kalyan Project</h1>
        <p>Sample text about Kalyan project...</p>
        <image
          src="/images/sample1.jpg"
          alt="Kalyan"
          className="w-full h-auto mt-4"
        />
        <image
          src="/images/sample2.jpg"
          alt="Kalyan"
          className="w-full h-auto mt-4"
        />
      </div>
      <Footer />
    </>
  );
};

export default Kalyan;
