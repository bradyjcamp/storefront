import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { removeFromCart } from '../../store/cart';


function CartList(){

  let dispatch = useDispatch();
  let cart = useSelector(state => state.cart)

  const handleRemoveFromCart = (product) => {
    let action = removeFromCart(product);
    dispatch(action);
  }
  
  return(
    <>
    {cart.cart[0] ?
      cart.cart.map(item => (
        <div key={item._id}>
          <p>{item.name}</p> 
          <p>Price: ${item.price}</p>
          {cart.itemCounter === 0?
              <Button disabled> Remove from Cart</Button> :
              <Button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</Button>}
        </div>
  
      ))
      :
      <p></p>
    }
    </>
  )
}


export default CartList
