const initialState = {
  cart: [],
  itemCounter: 0,

}


function cartReducer(state = initialState, action){
  switch(action.type){
    case 'ADD_TO_CART':
      return{
        ...state,
        cart: [...state.cart, action.payload],
        itemCounter: state.itemCounter + 1
      };
    case 'REMOVE_FROM_CART':
      return{
        ...state, 
        cart: state.cart.filter(item => item !== action.payload),
        
        itemCounter: state.itemCounter - 1
      };
      default:
        return state
  }
}


export const addToCart = (item) => {
  return{
    type: 'ADD_TO_CART',
    payload: item,
  }
}

export const removeFromCart = (item) => {
  return{
    type: 'REMOVE_FROM_CART',
    payload: item,
  }
}

export default cartReducer;