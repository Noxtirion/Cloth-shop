import { useState } from "react";

const useToggler = () => {
   const [isToggledOn, setIsToggledOn] = useState(false);

   function toggle() {
      setIsToggledOn(true);
   }

   return [isToggledOn, toggle];
};

export default useToggler;
