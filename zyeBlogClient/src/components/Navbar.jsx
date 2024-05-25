import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
    { path: "/contact", link: "Contact" },
    { path: "/portfolio", link: "Portfolio" },
    { path: "/blog", link: "Blog" },
  ];

  // Modal details
  const openModal = () => {
    setIsModalOpen(true);
  }


  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <header className="bg-[#00ABE4] text-[#111439] fixed top-0 left-0 right-0 ">
      <p className="text-sm  text-white flex align-center justify-center">
        Info<span className="text-[#111439] pr-4">hub</span> Discover, Learn,
        Grow
      </p>
      <nav className="bg-[#E9F1FA] px-4 py-4 mx-auto flex justify-between">
        <a href="/" className="text-xl font-bold text-[#00ABE4]">
          Info<span className="text-[#111439]">hub</span>{" "}
        </a>
        {/* navItems for lg devices */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              {" "}
              {/* Unique key for each NavLink */}
              <NavLink
                to={path}
          //  className="text-[#111439] hover:text-[#00ABE4] "
                className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
              }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}
        <div className="text-[#111439] lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-[#00ABE4]">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-[#00ABE4]">
            <FaTwitter />
          </a>
          <a href="/" className="hover:text-[#00ABE4]">
            <FaInstagram />
          </a>
          <button onClick={openModal} className="bg-[#00ABE4] px-6 py-2 font-medium text-white rounded hover:bg-[#111439] tracking-wider transition-all duration-200 ease-in">
            Login
          </button>
        </div>

          {/* Our Modal Component Is Here */}
        <Modal isOpen={isModalOpen} onClose={closeModal}/>

        {/* Mobile menu icon displays mobile screen */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu items for mobile screens */}

      <div>
        <ul
          className={
            `md:hidden gap-12 text-lg block space-y-4 px-4 py-6 bg-white ${isMenuOpen ? "fixed top-15 left-0 w-[full] transition-all ease-out duration-150" : "hidden" }`
          }
        >
          {navItems.map(({ path, link }) => (
            <li key={path}>
              {" "}
              {/* Unique key for each NavLink */}
              <NavLink
                onClick={toggleMenu}
                to={path}
                className="text-[#00ABE4] "
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
