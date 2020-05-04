import React from "react";
import sections from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

function Directory() {
   const menuItem = sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
   ));

   return <div className="directory-menu">{menuItem}</div>;
}

export default Directory;
