import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Contact from "./pages/contact/contact.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { useSelector, useDispatch } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.scss";

function App() {
   const currentUser = useSelector(selectCurrentUser);

   const dispatch = useDispatch();

   useEffect(() => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot => {
               dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
            });
         } else {
            dispatch(setCurrentUser(userAuth));
         }
      });
      return () => unsubscribeFromAuth();
   }, [dispatch]);

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
            <Route path="/contact">
               <Contact />
            </Route>
            <Route path="/checkout">
               <CheckoutPage />
            </Route>
            <Route path="/signin">
               {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
            </Route>
         </Switch>
      </div>
   );
}

export default App;
