import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "../styles/Para1";
import SubscribeNowBtn from "../Btns/SubscribeNowBtn";
import { footerLinks, footerSocial } from "../constants";
import { NavLink, useLocation } from "react-router-dom";
import SocialComp from "../styles/SocialComp";
import SectionHeader from "../Styles/SectionHeader";

const Footer = () => {
  const whitelist = ["/", "/serviceDetail", "/projectDetail"];
  const { pathname } = useLocation();
  return (
    <footer
      className={`${
        whitelist.includes(pathname)
          ? "bg-gradient-to-b from-transparent from-35% to-blue to-35%"
          : "bg-blue"
      } `}
    >
      <div className={`${styles.marginX} ${styles.flexCol}`}>
        {whitelist.includes(pathname) && (
          <div
            className={`${styles.flexRow} py-18 px-26 gap-21 bg-gray-50 shadow-md`}
          >
            <div className={`${styles.flexCol} flex-1 gap-6`}>
              <SectionHeader
                title="Subscribe Now"
                heading="Join Newsletter"
                gap="gap-6"
              />
              <Para1 fontWeight="font-normal">
                Lorem ipsum dolor sit amet consectetur. Lobortis in integer
                lorem malesuada in pretium vitae imperdiet vivamus. Lorem.
              </Para1>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className={`${fontStyles.p1} ${styles.flexRow} basis-[45%] gap-2 w-full`}
            >
              <input
                type="email"
                className="border h-14 px-6 border-cream placeholder:text-cream focus:border-blue text-blue rounded-lg focus:outline-none flex-1"
                placeholder="Enter your mail"
              />
              <SubscribeNowBtn />
            </form>
          </div>
        )}
        <div
          className={`${styles.flexCol} text-white items-center gap-10 mt-20 mb-14`}
        >
          <h4 className={`${fontStyles.h4} font-bold`}>LoremEpsum</h4>
          <ul
            className={`${styles.flexRow} ${fontStyles.p1} text-cream font-openSans font-bold gap-10`}
          >
            {footerLinks?.map((nav) => (
              <li key={nav.id} className="hover:text-white">
                <NavLink to={nav.to}>{nav.title}</NavLink>
              </li>
            ))}
          </ul>
          <div className={`${styles.flexRow} gap-4`}>
            {footerSocial?.map((data, index) => (
              <SocialComp data={data} key={index} />
            ))}
          </div>
        </div>
        {/* Last Part */}
        <div className={`${styles.flexBetween} border-t border-cream py-6`}>
          <Para1 fontWeight="font-normal" color="text-white">
            Privacy Policy
          </Para1>
          <Para1 fontWeight="font-normal" color="text-white">
            Lorem ipsum dolor sit amet consectetur.
          </Para1>
          <Para1 fontWeight="font-normal" color="text-white">
            Terms & Condition
          </Para1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
