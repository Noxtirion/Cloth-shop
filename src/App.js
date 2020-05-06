import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

function App() {
   const [currentUser, setCurrentUser] = useState(null);

   useEffect(() => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
         setCurrentUser(user);
      });
      return () => unsubscribeFromAuth();
   }, []);

   return (
      <div>
         <Header currentUser={currentUser} />
         <Switch>
            <Route exact path="/">
               <HomePage />
            </Route>
            <Route path="/shop">
               <ShopPage />
            </Route>
            <Route path="/signin">
               <SignInAndSignUpPage />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
