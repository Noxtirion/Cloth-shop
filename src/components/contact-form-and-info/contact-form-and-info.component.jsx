import React from "react";

import ContactForm from "../contact-form/contact-form.component";
import ContactInfo from "../contact-info/contact-info.component";

import "./contact-form-and-info.styles.scss";

const ContactFormAndInfo = () => {
   return (
      <div className="contact-form-and-info">
         <ContactForm />
         <ContactInfo />
      </div>
   );
};

export default ContactFormAndInfo;
