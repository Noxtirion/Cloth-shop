import React from "react";

import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = () => {
   const { collectionId } = useParams();

   const { title, items } = useSelector(state => selectCollection(collectionId)(state));

   return (
      <div className="collection-page">
         <h2 className="title">{title}</h2>
         <div className="items">
            {items.map(item => (
               <CollectionItem key={item.id} item={item} />
            ))}
         </div>
      </div>
   );
};

export default CollectionPage;
