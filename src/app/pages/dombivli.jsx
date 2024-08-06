import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dombivali = () => {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl">Dombivali Project</h1>
        <p>Sample text about Dombivali project...</p>
        <image
          src="/images/sample1.jpg"
          alt="Dombivali"
          className="w-full h-auto mt-4"
        />
        <image
          src="/images/sample2.jpg"
          alt="Dombivali"
          className="w-full h-auto mt-4"
        />
      </div>
      <Footer />
    </>
  );
};

export default Dombivali;
