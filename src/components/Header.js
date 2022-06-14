// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const Header = (props) => {
  
  // const [showCart, setShowCart] = useState(false);
  let cart = useSelector(state => state.cart)
  
  // const handleClick = () => {
  //   setShowCart(!showCart)
  // }

  return(
    <>
      <div id='header'>
        <header>Brady's Store</header>
      </div>
      <Link to="/storefront">Home</Link>
      <Link to="/cart">
        <Badge badgeContent={cart.itemCounter} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </>
  )
}

export default Header