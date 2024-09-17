"use client";

import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export default function ContactForm({ showDetails = true }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
        });
      } else {
        setMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className={`min-h-[80vh] w-full flex flex-col items-center justify-center ${
        showDetails ? "bg-white" : ""
      } py-12 sm:px-6 lg:px-8`}
    >
      {/* Enquire Now heading */}
      <h2
        className="text-4xl font-bold mb-12 md:mb-20 text-black text-center"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Enquire Now
        <div className="flex justify-center mt-2">
          <span className="inline-block w-32 h-1 bg-blue-500 mr-1"></span>
          <span className="inline-block w-32 h-1 bg-green-500"></span>
        </div>
      </h2>

      <div
        className={`w-full max-w-6xl ${
          showDetails
            ? "bg-white rounded-lg overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1),0_6px_6px_rgba(0,0,0,0.1)]"
            : ""
        }`}
      >
        <div className={`flex flex-col ${showDetails ? "md:flex-row" : ""}`}>
          {/* Contact Details */}
          {showDetails && (
            <div className="w-full md:w-1/2 bg-blue-500 text-white p-8 flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <FaLocationDot className="w-6 h-6" />
                  <p>
                    <strong>Site Address:</strong> Shop C-2 V-10 Residency
                    Vishnu Nagar, Rambaug Lane no 4 Kalyan (West)
                  </p>
                </div>
                <div className="border-b border-gray-200 my-2"></div>
                <div className="flex items-center space-x-2">
                  <FiPhoneCall className="w-6 h-6" />
                  <div>
                    <a href="tel:02248900105" className="hover:underline">
                      9892537787, 7506929394
                    </a>
                    <p>Mon to Sun 10:30 AM to 7:30 PM</p>
                  </div>
                </div>
                <div className="border-b border-gray-200 my-2"></div>
                <div className="flex items-center space-x-2">
                  <MdEmail className="w-6 h-6" />
                  <div>
                    <a
                      href="mailto:aarav.enterprises1704@gmail.com"
                      className="hover:underline"
                    >
                      aarav.enterprises1704@gmail.com
                    </a>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <div className="w-full md:w-[100%] pt-8 pb-8 pl-8 pr-8 md:pl-0 md:pr-0 flex flex-col h-auto justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 text-black w-full max-w-md"
            >
              <div className="space-y-4">
                <div>
                  <label className="block mb-1" htmlFor="name">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border w-full p-3 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="email">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border w-full p-3 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="phone">
                    Mobile*
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border w-full p-3 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="interest">
                    Interest*
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="border w-full p-3 rounded"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="4BHK">4BHK</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              {message && (
                <p
                  className={`mt-2 text-center ${
                    message.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
