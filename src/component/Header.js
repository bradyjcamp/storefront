import { connect } from 'react-redux';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const handleClick = () => {

    console.log('Hello')

}
const Header = ({ cart, itemCounter }) => {
  
  console.log(cart)

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
    {cart[0] ?
    cart.map(item => (
      <div>
        <p>{item.name}</p> 
        <p>Price: ${item.price}</p>
      </div>

    ))
    :
    <p></p>
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