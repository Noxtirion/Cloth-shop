import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

import "./App.css";

function App() {
   return (
      <div>
         <Switch>
            <Route exact path="/">
               <HomePage />
            </Route>
            <Route path="/shop">
               <ShopPage />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
