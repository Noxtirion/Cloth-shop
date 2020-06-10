import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

import { useSelector } from "react-redux";

const Header = () => {
   const currentUser = useSelector(state => state.user.currentUser);
   const hidden = useSelector(state => state.cart.hidden);

   return (
      <div className="header">
         <Link className="logo-container" to="/">
            <Logo className="logo" />
         </Link>
         <div className="options">
            <Link className="option" to="/shop">
               SHOP
            </Link>
            <Link className="option" to="/shop">
               CONTACT
            </Link>
            {currentUser ? (
               <div className="option" onClick={() => auth.signOut()}>
                  SIGN OUT
               </div>
            ) : (
               <Link className="option" to="/signin">
                  SIGN IN
               </Link>
            )}
            <CartIcon />
         </div>
         {hidden ? null : <CartDropdown />}
      </div>
   );
};

export default Header;
