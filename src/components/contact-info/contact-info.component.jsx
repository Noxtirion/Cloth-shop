import React from "react";

import { ReactComponent as Address } from "../../assets/address.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { ReactComponent as Facebook } from "../../assets/facebook-line.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin-line.svg";
import { ReactComponent as Twitter } from "../../assets/twitter-line.svg";

import "./contact-info.styles.scss";

const ContactInfo = () => {
   return (
      <div className="contact-info">
         <h2>CONTACT INFORMATION</h2>
         <div className="address info">
            <Address className="address-icon icon" />
            <div className="contact-text">
               <p>12-345 SampleCity, 678/9 Sample Street</p>
            </div>
         </div>
         <div className="phone info">
            <Phone className="phone-icon icon" />
            <div className="contact-text">
               <p>123-456-789</p>
            </div>
         </div>
         <div className="mail info">
            <Mail className="mail-icon icon" />
            <div className="contact-text">
               <p>sample.mail@sample.com</p>
            </div>
         </div>
         <div className="contact-online">
            <Facebook className="facebook-icon icon-online" />
            <LinkedIn className="linkedin-icon icon-online" />
            <Twitter className="twitter-icon icon-online" />
         </div>
      </div>
   );
};

export default ContactInfo;
