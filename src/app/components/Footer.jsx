import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneSquareAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import logo from "../../images/aarav-realty-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-12 relative bg-white text-black">
      <div className="border-t-4 border-black w-full absolute top-0 left-0"></div>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="flex justify-between items-center md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start border-t border-white pt-6">
          <div className="flex-1 sm:text-left">
            <h2 className="text-2xl md:text-3xl font-medium">
              Interested To Get Our Featured Service
            </h2>
          </div>
          <div className="text-center sm:text-center">
            <a href="tel:+919892537787">
              <button className="primary-btn border border-white rounded-full py-2 px-4 text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                Call us Now
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 pt-20">
          <div className="lg:pr-8 text-center md:text-start flex flex-col items-center md:flex-row md:items-center">
            <Image
              src={logo}
              alt="WebDev"
              className="mx-auto pb-4 md:pb-0 md:mx-0"
              width={100} // Increased size
              height={100} // Increased size
            />
            <div className="ml-3 text-center md:text-left">
              <div className="text-black text-xl md:text-2xl">Aarav Realty</div>
              <p className="text-base mt-2 hover:text-gray-300 transition-all duration-300">
                At Aarav Realty, we specialize in real estate services fueled by
                passion and powered by expertise.
              </p>
            </div>
          </div>

          <div className="mx-auto text-center md:text-start sm:text-center">
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="list-inside md:list-outside">
              <li className="my-2 text-lg hover:text-gray-300 transition-all duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="my-2 text-lg hover:text-gray-300 transition-all duration-300">
                <Link href="/about">About Us</Link>
              </li>
              {/* <li className="my-2 text-lg hover:text-gray-300 transition-all duration-300">
                <Link href="/contact">Contact us</Link>
              </li> */}
            </ul>
          </div>

          <div className="mx-auto text-center md:text-start sm:text-center">
            <h3 className="text-2xl font-medium mb-6">Get In Touch</h3>
            <ul>
              <li className="my-2 hover:text-gray-300 transition-all duration-300">
                <a
                  className="text-base flex items-center justify-center md:justify-start gap-2"
                  href="tel:+919892537787"
                >
                  <FaPhoneSquareAlt className="text-xl" /> +91-9892537787
                </a>
              </li>
              <li className="my-2 hover:text-gray-300 transition-all duration-300">
                <a
                  className="text-base flex items-center justify-center md:justify-start gap-2"
                  href="mailto:aarav.enterprises1704@gmail.com"
                >
                  <FaEnvelope className="text-xl" />{" "}
                  aarav.enterprises1704@gmail.com
                </a>
              </li>

              {/* Managed by Social Pulse */}
              <li className="my-2 mt-4">
                <p className="text-base">
                  Website managed by{" "}
                  <a
                    href="https://www.socialpulseagency.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-all duration-300"
                  >
                    Social Pulse Agency
                  </a>
                  .
                </p>
              </li>

              <li className="mt-8">
                <ul className="flex justify-center gap-6 md:gap-6 items-center">
                  <li>
                    <a
                      className="flex items-center justify-center w-10 h-10 text-xl rounded-full border border-black transition-all duration-300 hover:bg-gray-200" // Normal hover effect
                      href="https://www.facebook.com/aaravrealty.in?mibextid=ZbWKwL"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="w-5 h-5 text-black" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center w-10 h-10 text-xl rounded-full border border-black transition-all duration-300 hover:bg-gray-200" // Normal hover effect
                      href="https://www.instagram.com/aaravrealty.in?igsh=MTFsZHY5YnptbTd5Zw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-5 h-5 text-black" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-black mt-6"></div>{" "}
      {/* Added thin black border */}
      <div className="text-center py-6 mt-2 md:mt-2 lg:mt-2 mb-0 border-t border-white pt-6">
        <p className="text-sm">
          © Copyright{" "}
          <a
            href="#"
            className="hover:text-gray-300 transition-all duration-300"
          >
            Aarav Realty
          </a>{" "}
          2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
