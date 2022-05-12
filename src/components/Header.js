import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartList from './SimpleCart/SimpleCart'


const Header = ({ cart, itemCounter }) => {
  
  const [showCart, setShowCart] = useState(false);
  
  const handleClick = () => {
  
    setShowCart(!showCart)
  
  }
  
  // console.log(cart)

  return(
    <>
    <div id='header'>
      <header>Brady's Store</header>
    </div>
    <IconButton onClick={() => handleClick()} aria-label="cart">
    <Badge badgeContent={itemCounter} color="primary">
        <ShoppingCartIcon />
    </Badge>
    </IconButton>
    { showCart ?
      <CartList /> : null
    }
    </>
  )
}

const mapStateToProps = ({ cart }) => {
  return{
    itemCounter: cart.itemCounter,
    cart: cart.cart
  }
}



export default connect(mapStateToProps)(Header)