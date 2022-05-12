import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartList from './SimpleCart/SimpleCart'

const Header = (props) => {
  
  const [showCart, setShowCart] = useState(false);
  let cart = useSelector(state => state.cart)
  
  const handleClick = () => {
    setShowCart(!showCart)
  }

  return(
    <>
    <div id='header'>
      <header>Brady's Store</header>
    </div>
    <IconButton onClick={() => handleClick()} aria-label="cart">
    <Badge badgeContent={cart.itemCounter} color="primary">
        <ShoppingCartIcon />
    </Badge>
    </IconButton>
    { showCart ?
      <CartList /> : null
    }
    </>
  )
}

export default Header