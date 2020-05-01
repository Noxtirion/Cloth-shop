import React from "react";
import sections from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

function Directory() {
   const menuItem = sections.map(({ title, imageUrl, id, linkUrl, size }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} size={size} />
   ));

   return <div className="directory-menu">{menuItem}</div>;
}

export default Directory;
