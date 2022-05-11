import cartReducer from "../store/cart";
import { addToCart, removeFromCart } from "../store/cart";
import { legacy_createStore as createStore, combineReducers } from 'redux'; 
import productReducer from "../store/products";


describe('Testing cart action', () => {

  const reducers = combineReducers({
    cart: cartReducer,
    products: productReducer
  });

  const store = createStore(reducers);

  test('Should add a product to our cart', () => {
    let state = store.getState();

    let product = state.products.products[0]
    store.dispatch(addToCart(product));
    
    state = store.getState();
    expect(state.cart.cart[0].name).toBe('Tent')
  })
})