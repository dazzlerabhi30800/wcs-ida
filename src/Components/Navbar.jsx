import React, { useEffect, useState } from "react";
import { fontStyles, styles } from "../style";
import { navLinks } from "../constants";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ContactUsBtn from "../Btns/ContactUsBtn";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const { pathname } = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowLinks(false);
  }, [pathname]);
  return (
    <nav className="bg-darkBlue z-40 w-full top-0">
      <div
        className={`${styles.flexBetween} ${styles.marginX} text-white py-6`}
      >
        <h4 className={`${fontStyles.h4} font-bold z-50`}>LoremEpsum</h4>
        <ul
          className={`${styles.flexRow} ${fontStyles.p1} hidden lg:flex font-openSans font-bold text-grey gap-10`}
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
        <div className="hidden lg:block">
          <ContactUsBtn />
        </div>
        {/* Menu Btn */}
        <button
          onClick={() => setShowLinks((prev) => !prev)}
          className="text-xl lg:hidden"
        >
          {showLinks ? <RiCloseLargeLine /> : <RxHamburgerMenu />}
        </button>
        {/* NAVBAR FOR MOBILE */}
        <div
          className={`${styles.flexCol} ${styles.transitionL} ${showLinks ? "translate-x-0" : "-translate-x-[1000px]" } min-h-[50vh] lg:hidden items-center p-10 pt-24 gap-10 absolute top-0 z-40 shadow-lg left-0 bg-darkBlue w-3/5`}
        >
          <ul
            className={`${styles.flexCol} gap-10 ${fontStyles.p1} font-openSans font-bold text-grey`}
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
      </div>
    </nav>
  );
};

export default Navbar;
