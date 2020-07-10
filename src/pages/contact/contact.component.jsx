import React from "react";

import Map from "../../components/map/map.component";
import ContactFormAndInfo from "../../components/contact-form-and-info/contact-form-and-info.component";
import ContactDescription from "../../components/contact-description/contact-description.component";

import { location } from "./location.data";

import "./contact.styles.scss";

const Contact = () => {
   return (
      <div className="contact">
         <div className="contact-wrapper">
            <ContactDescription />
            <ContactFormAndInfo />
         </div>
         <Map options={{ location, zoomLevel: 10 }} />
      </div>
   );
};

export default Contact;
