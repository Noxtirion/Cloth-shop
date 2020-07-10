import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import FormTextArea from "../form-textarea/form-textarea.component";
import CustomButton from "../custom-button/custom-button.component";

import "./contact-form.styles.scss";

const ContactForm = () => {
   const [inputData, setInputData] = useState({ name: "", phone: "", email: "", message: "" });

   const handleSubmit = e => {
      e.preventDefault();

      console.log("submited");
   };

   const handleChange = e => {
      const { name, value } = e.target;
      setInputData(prevInputData => {
         return {
            ...prevInputData,
            [name]: value
         };
      });
   };

   return (
      <div className="contact-form">
         <h2 className="title">SEND US A MESSAGE</h2>
         <form onSubmit={handleSubmit}>
            <FormInput
               name="name"
               type="text"
               value={inputData.name}
               handleChange={handleChange}
               label="name"
               required
            />
            <FormInput
               name="phone"
               type="tel"
               value={inputData.phone}
               handleChange={handleChange}
               label="phone"
               required
            />
            <FormInput
               name="email"
               type="email"
               value={inputData.email}
               handleChange={handleChange}
               label="email"
               required
            />
            <FormTextArea
               name="message"
               value={inputData.message}
               handleChange={handleChange}
               label="message"
               required
            />
            <div className="buttons">
               <CustomButton type="submit">Send</CustomButton>
            </div>
         </form>
      </div>
   );
};

export default ContactForm;
