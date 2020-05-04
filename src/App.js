import React from "react";
import HomePage from "./pages/homepage.component";
import { Switch, Route } from "react-router-dom";

import "./App.css";

const HatsPage = () => (
   <div>
      <h1>HATS PAGE</h1>
   </div>
);

function App() {
   return (
      <div>
         <Switch>
            <Route exact path="/">
               <HomePage />
            </Route>
            <Route path="/hats">
               <HatsPage />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
