import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import "./App.css";

function App() {
   return (
      <div>
         <Header />
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
