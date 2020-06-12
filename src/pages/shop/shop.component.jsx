import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
   const match = useRouteMatch();

   return (
      <div className="shop-page">
         <Route exact path={`${match.path}`}>
            <CollectionsOverview />
         </Route>
         <Route path={`${match.path}/:collectionId`}>
            <CollectionPage />
         </Route>
      </div>
   );
};

export default ShopPage;
