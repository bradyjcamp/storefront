import { useSelector } from 'react-redux';
// import cartReducer, { addToCart, removeFromCart } from '../../store/cart';


function CartList(){

  let cart = useSelector(state => state.cart)

  return(
    <>
    {cart.cart[0] ?
      cart.cart.map(item => (
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


export default CartList
