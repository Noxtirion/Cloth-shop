import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { useDispatch } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import useToggler from "../../components/use-toggler/use-toggler.component";

const ShopPage = () => {
   const match = useRouteMatch();
   const dispatch = useDispatch();
   const [isLoading, toggle] = useToggler();

   useEffect(() => {
      const collectionRef = firestore.collection("collections");

      const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapShot => {
         const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
         dispatch(updateCollections(collectionsMap));
         toggle();
      });

      return () => unsubscribeFromSnapshot();
   }, [dispatch, toggle]);

   return (
      <div className="shop-page">
         <Route exact path={`${match.path}`}>
            <CollectionsOverview />
         </Route>
         <Route path={`${match.path}/:collectionId`}>
            {isLoading ? <CollectionPage /> : <WithSpinner />}
         </Route>
      </div>
   );
};

export default ShopPage;
