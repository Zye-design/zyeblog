import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#E9F1FA]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-[#111439]">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Finance News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Oil and Gas
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Real Estate
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Information and Technology
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Media & Entertainment
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div>
              <p className="font-medium tracking-wide text-[#111439]">
                Mobile & Web Development
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    E-Commerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Agency
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Restaurants
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div>
              <p className="font-medium tracking-wide text-[#111439]">
                Services
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Financial Advisory
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Investment Tips
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Consultancy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Risk Management
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div>
              <p className="font-medium tracking-wide text-[#111439]">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#111439] transition-colors duration-300 hover:text-[#00ABE4] font-primary"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscriptions */}
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <p className="font-medium tracking-wide text-[#111439]">
              Subscribe for updates
            </p>
            <form action="" className="mt-4 flex flex-col md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-[#00ABE4] rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center bg-[#00ABE4] justify-center h-12 px-6 font-medium tracking-wide text-[#E9F1FA] transistion duration-200 rounded shadow-md hover:bg-[#111439] focus:outline-none border border-[#00ABE4] "
              >
                Subcribe
              </button>
            </form>

            <p className="mt-4 text-sm text-[#111439] font-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora quod dolorem sunt libero iure repudiandae, cum nihil dolores repellendus necessitatibus eligendi. Totam tenetur illo, optio eius modi eligendi deleniti?
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-[#00ABE4] sm:flex-row">
          <p> © 2024 All rights reserved. | Designed and Developed by <a href="/" className="font-semibold font-secondary hover:text-[#00ABE4] italic">ZYECODES</a></p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="/" className="text-[#111439] transition-all duration-300 hover:text-[#00ABE4]"><FaTwitter className="h-6 w-6"/></a>
            <a href="/" className="text-[#111439] transition-all duration-300 hover:text-[#00ABE4]"><FaInstagram className="h-6 w-6"/></a>
            <a href="/" className="text-[#111439] transition-all duration-300 hover:text-[#00ABE4]"><FaFacebook className="h-6 w-6"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
