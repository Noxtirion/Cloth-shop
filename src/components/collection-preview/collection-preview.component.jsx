import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import { useHistory } from "react-router-dom";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, routeName }) => {
   const history = useHistory();

   return (
      <div className="collection-preview">
         <h1
            className="title"
            onClick={() => {
               history.push(`/shop/${routeName}`);
            }}
         >
            {title.toUpperCase()}
         </h1>
         <div className="preview">
            {items
               .filter((item, index) => index < 4)
               .map(item => (
                  <CollectionItem key={item.id} item={item} />
               ))}
         </div>
      </div>
   );
};

export default CollectionPreview;
