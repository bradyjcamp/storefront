const initialState = {
  products: [
    {
      id: 1,
      name: 'Tent',
      category: 'outdoor-equipment',
      description: 'A sturdy 10 x 10 tent for mild weather',
      price: 50,
      inventory: 15
    },
    {
      id: 2,
      name: 'Backpack',
      category: 'outdoor-equipment',
      description: 'A 50 Liter Backpack',
      price: 150,
      inventory: 5
    },
    {
      id: 3,
      name: 'Boots',
      category: 'clothing',
      description: 'Hiking Boots',
      price: 95,
      inventory: 10
    },
    {
      id: 4,
      name: 'Hiking Pants',
      category: 'clothing',
      description: 'Weatherproof rugged material',
      price: 49,
      inventory: 20
    }
  ],
  selectedProducts: []
}

function productReducer(state = initialState, action){
  switch(action.type){
    case 'CHANGE':
      return{
        ...state,
        selectedProducts: state.products.filter(product => product.category === action.payload)
      };
    case 'ADD_TO_CART':
      return{
        ...state,
        products: state.products.map(product => {
          if (product.name === action.payload.name && product.inventory > 0){
              product.inventory = product.inventory - 1
          }
          return product;
        })
      };
    case 'REMOVE_FROM_CART':
      return{
        ...state,
        products: state.products.map(product => {
          if (product.name === action.payload.name){
              product.inventory = product.inventory + 1
          }
          return product;
        })
      }
      default:
        return state;
  }
}

export const changeProducts = (category) => {
  return{
    type: 'CHANGE',
    payload: category,
  };
};

// export const decrementInventory = (product) => {
//   return{
//     type: 'ADD_TO_CART',
//     payload: product,
//   }
// }

export default productReducer;