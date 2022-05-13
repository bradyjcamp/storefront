import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { removeFromCart } from "../../store/cart";
import { Link } from "react-router-dom";

function CartList() {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (product) => {
    let action = removeFromCart(product);
    dispatch(action);
  };

  const handleTotalPrice = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].price;
    }
    return total;
  };

  return (
    <>
      {cart.cart[0] ? (
        cart.cart.map((item) => (
          <div key={item._id}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: 1</p>

            {cart.itemCounter === 0 ? (
              <Button disabled> Remove from Cart</Button>
            ) : (
              <Button onClick={() => handleRemoveFromCart(item)}>
                Remove from Cart
              </Button>
            )}
          </div>
        ))
      ) : (
        <h4> Your Cart is Empty</h4>
      )}
      <h4>Total: ${handleTotalPrice(cart.cart).toFixed(2)}</h4>
      { !handleTotalPrice(cart.cart)  ?
        <Button disabled>CHECKOUT</Button> :
      <Button>
        <Link to="/checkout">CHECKOUT</Link>
      </Button>
      }
    </>
  );
}

export default CartList;
