import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import ContactForm from "../Components/ContactForm";
import Map from "../Components/Map";
import HeroSection2 from "../Components/HeroSection2";

const ContactUs = () => {
  const { updateContactPage } = useGlobalContext();
  useEffect(() => {
    updateContactPage();
  }, []);
  return (
    <main>
      <HeroSection2 />
      <ContactForm />
      <Map />
    </main>
  );
};

export default ContactUs;
