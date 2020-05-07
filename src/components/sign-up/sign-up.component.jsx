import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";
import SignIn from "../sign-in/sign-in.component";

const SignUp = () => {
   const [signUpData, setSignUpData] = useState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
   });

   const { displayName, email, password, confirmPassword } = signUpData;

   const handleSubmit = async e => {
      e.preventDefault();
      if (password !== confirmPassword) {
         alert("passwords don't match");
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password);

         await createUserProfileDocument(user, { displayName });

         setSignUpData({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
         });
      } catch (error) {
         console.error(error);
      }
   };

   const handleChange = e => {
      const { name, value } = e.target;
      setSignUpData(prevSignUpData => {
         return {
            ...prevSignUpData,
            [name]: value
         };
      });
   };

   return (
      <div className="sign-up">
         <h2 className="title">I do not have an account</h2>
         <span>Sign Up with your email and password</span>
         <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
               type="text"
               name="displayName"
               value={displayName}
               onChange={handleChange}
               label="Display Name"
               required
            />
            <FormInput
               type="email"
               name="email"
               value={email}
               onChange={handleChange}
               label="Email"
               required
            />
            <FormInput
               type="password"
               name="password"
               value={password}
               onChange={handleChange}
               label="Password"
               required
            />
            <FormInput
               type="password"
               name="confirmPassword"
               value={confirmPassword}
               onChange={handleChange}
               label="Confirm Password"
               required
            />
            <CustomButton type="submit">SIGN UP</CustomButton>
         </form>
      </div>
   );
};

export default SignUp;