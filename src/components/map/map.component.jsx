import React from "react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

import { containerStyle } from "./map.data.js";

import "./map.styles.scss";

const Map = ({ options: { location, zoomLevel } }) => {
   return (
      <div className="map">
         <LoadScript>
            <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={zoomLevel} />
         </LoadScript>
      </div>
   );
};

export default React.memo(Map);
