import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import { useSelector, useDispatch } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const ShopPage = () => {
   const match = useRouteMatch();
   const dispatch = useDispatch();
   const isCollectionFetching = useSelector(selectIsCollectionFetching);

   useEffect(() => {
      dispatch(fetchCollectionsStartAsync());
   }, [dispatch]);

   return (
      <div className="shop-page">
         <Route exact path={`${match.path}`}>
            {isCollectionFetching ? <CollectionsOverview /> : <WithSpinner />}
         </Route>
         <Route path={`${match.path}/:collectionId`}>
            {isCollectionFetching ? <CollectionPage /> : <WithSpinner />}
         </Route>
      </div>
   );
};

export default ShopPage;
