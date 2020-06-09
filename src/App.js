import React, { useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

function App() {
   const currentUser = useSelector(state => state.user.currentUser);
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
            <Route path="/signin">
               {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
            </Route>
         </Switch>
      </div>
   );
}

export default App;
