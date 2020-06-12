import React from "react";
import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

function Directory() {
   const directory = useSelector(selectDirectorySections);

   const menuItem = directory.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
   ));

   return <div className="directory-menu">{menuItem}</div>;
}

export default Directory;
