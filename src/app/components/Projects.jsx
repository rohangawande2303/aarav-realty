"use client";

import React from "react";
import Card from "./Card";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full h-auto min-h-[80vh] flex flex-col items-center justify-center py-10 bg-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mt-8 mb-12 text-black text-center">
        Popular Locations
      </h2>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-16 text-center max-w-6xl leading-relaxed">
        When we are looking for a property to buy, we look for many things in
        it, like the amenities, the size of the apartment, and the key factor
        that makes home hunting much more difficult: finding a proper location.
        You don’t have to worry about it because we have sorted a few of the
        best locations for buying property at really great prices.
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <Card title="Kalyan" link="/kalyan" />
        <Card title="Dombivli" link="/dombivli" />
      </div>
    </div>
  );
}
