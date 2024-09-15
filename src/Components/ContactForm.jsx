import React from "react";
import { useGlobalContext } from "../context";
import { fontStyles, styles } from "../style";
import Para1 from "../styles/Para1";
import SectionTitle from "../Styles/SectionTitle";
import SendMessageBtn from "../Btns/SendMessageBtn";

const ContactForm = () => {
  const { contactData } = useGlobalContext();
  return (
    <section className={`mt-[120px]`}>
      <div className={`${styles.marginX} flex`}>
        {/* Left */}
        <div
          className={`${styles.flexCol} text-white p-8 bg-blue justify-center basis-1/2 gap-6 rounded-l-lg`}
        >
          <div className={`${styles.flexCol} gap-4`}>
            <SectionTitle>Contact Us</SectionTitle>
            <h2 className={`${fontStyles.h2} font-bold`}>
              Please Feel Free To Contact Us If You Have Any Questions
            </h2>
          </div>
          <Para1 fontWeight="font-normal" color="text-inherit">
            Lorem ipsum dolor sit amet consectetur. Imperdiet nullam euismod ac
            lectus porttitor tristique commodo vestibulum ullamcorper. Arcu a
            sed arcu augue.
          </Para1>
          <div className="grid grid-cols-2 gap-[9px]">
            {contactData?.map(({ title, info }, index) => (
              <div key={index} className={`${styles.flexCol} gap-4`}>
                <h4 className={`${fontStyles.h4} font-bold font-notoSans`}>
                  {title}
                </h4>
                {info?.map(({ icon, text }, index) => (
                  <div key={index} className={`${styles.flexRow} gap-4`}>
                    <span className="text-xl">{icon}</span>
                    <Para1 fontWeight="font-normal" color="text-inherit">
                      {text}
                    </Para1>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className={`${styles.flexCol}  ${fontStyles.p2} [&_input]:rounded-lg [&_textarea]:rounded-lg gap-6 flex-1 w-full py-[52px] px-6 border border-cream rounded-r-lg`}
        >
          <div className={`${styles.flexCol} gap-2 text-blue`}>
            <p>First Name</p>
            <input
              type="text"
              placeholder="Your First Name"
              className="py-3 px-4 border border-cream placeholder:text-cream focus:outline-none focus:border-blue"
            />
          </div>
          <div className={`${styles.flexCol} gap-2 text-blue`}>
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Your Last Name"
              className="py-3 px-4 border border-cream placeholder:text-cream focus:outline-none focus:border-blue"
            />
          </div>
          <div className={`${styles.flexCol} gap-2 text-blue`}>
            <p>Email</p>
            <input
              type="email"
              placeholder="email@example.com"
              className="py-3 px-4 border border-cream placeholder:text-cream focus:outline-none focus:border-blue"
            />
          </div>
          <div className={`${styles.flexCol} gap-2 text-blue mb-4`}>
            <p>Message</p>
            <textarea
              type="text"
              rows="7"
              placeholder="Write Your Message"
              className="py-3 px-4 border border-cream placeholder:text-cream focus:outline-none focus:border-blue"
            />
          </div>
          <SendMessageBtn />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
