import { connect } from 'react-redux';
// import cartReducer, { addToCart, removeFromCart } from '../../store/cart';


function CartList({ cart }){
  return(
    <>
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


const mapStateToProps = ({ cart  }) => {
  return{
    cart: cart.cart
  }
}

export default connect(mapStateToProps)(CartList)
