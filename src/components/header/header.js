import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import './header.css';

const ShopHeader = ({ numOfItems, total = 0 }) => {
    return(
       <header className="shop-header row">
           <Link className="logo text-dark" to="/">ReStore</Link>
           <Link className="shopping-cart" to="/cart/">
               <i className="cart-icon fa fa-shopping-cart" />
               { numOfItems } items (${total})
           </Link>
       </header> 
    );
}

const mapStatetoProps = ({ shoppingCart: { cartItems, orderTotal }}) => ({
    numOfItems: cartItems.length,
    total: orderTotal
  });

export default connect(mapStatetoProps)(ShopHeader);