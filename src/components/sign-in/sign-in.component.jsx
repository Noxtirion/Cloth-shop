import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
   const [inputData, setInputData] = useState({ email: "", password: "" });

   const handleSubmit = async e => {
      e.preventDefault();

      const { email, password } = inputData;

      try {
         await auth.signInWithEmailAndPassword(email, password);
         setInputData({ email: "", password: "" });
      } catch (error) {
         console.log(error);
      }
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
      <div className="sign-in">
         <h2 className="title">I already have an account</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               name="email"
               type="email"
               value={inputData.email}
               handleChange={handleChange}
               label="email"
               required
            />
            <FormInput
               name="password"
               type="password"
               value={inputData.password}
               handleChange={handleChange}
               label="password"
               required
            />
            <div className="buttons">
               <CustomButton type="submit">Sign in</CustomButton>
               <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                  Sign in with Google
               </CustomButton>
            </div>
         </form>
      </div>
   );
};

export default SignIn;
