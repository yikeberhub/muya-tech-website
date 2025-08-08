import React from "react";
import ContactIntro from "./ContactIntro";
import ContactInfo from "./ContactInfo";
import ContactFormMap from "./ContactFormMap";
import FAQSection from "./FAQSection";

const ContactSection: React.FC = () => {
  return (
    <>
      <ContactIntro />
      <ContactInfo />
      <ContactFormMap />
      <FAQSection />
    </>
  );
};

export default ContactSection;
