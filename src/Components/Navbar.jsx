import React from "react";
import { fontStyles, styles } from "../style";
import { navLinks } from "../constants";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ContactUsBtn from "../Btns/ContactUsBtn";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="bg-transparent fixed w-full top-0">
      <div
        className={`${styles.flexBetween} ${styles.marginX} text-white py-8`}
      >
        <h4 className={`${fontStyles.h4} font-bold`}>LoremEpsum</h4>
        <ul
          className={`${styles.flexRow} ${fontStyles.p1} font-openSans font-bold text-grey gap-10`}
        >
          {navLinks?.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.to}
                className={`${pathname === nav.to && "text-white"} ${
                  styles.flexRow
                } gap-2 hover:text-white`}
              >
                {nav.title}
                {nav.dropdown && <FaChevronDown className="" />}
              </NavLink>
            </li>
          ))}
        </ul>
        <ContactUsBtn />
      </div>
    </nav>
  );
};

export default Navbar;
