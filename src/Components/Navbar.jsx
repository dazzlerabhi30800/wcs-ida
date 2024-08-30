import { useState } from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="w-full shadow-lg w-full top-0 sticky navbar">
      <div className="flex flex-col lg:flex-row justify-between mx-10 py-1 relative">
        <div className="flex justify-between items-center">
          {/* Logo  */}
          <img
            className="my-5 w-20 h-10 lg:w-28 lg:h-12"
            src="./images/logo.png"
            alt="ocilogo"
          />
          {/* Menu Button */}
          <button
            className="block lg:hidden"
            onClick={() => setShowLinks((prev) => !prev)}
          >
            {showLinks ? (
              <img src="./images/close.svg" alt="hamburger" />
            ) : (
              <img src="./images/menu.svg" alt="hamburger" />
            )}
          </button>
        </div>
        <div
          className={`flex-col lg:flex-row items-center gap-5 p-5 lg:p-0 lg:flex ${
            showLinks ? "flex" : "hidden"
          }`}
        >
          <ul className="list-none flex flex-col lg:flex-row justify-end gap-10 lg:gap-8 items-center flex-1 lg:mr-20 my-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-normal cursor-pointer text-[16px] hover:text-gray-500"
              >
                <NavLink to={`/${nav.to}`}>{nav.title}</NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact">
            <Button />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
