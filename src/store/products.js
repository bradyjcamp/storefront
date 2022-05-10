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
      default:
        return state;
  }
}

export const changeProducts = (category) => {
  return{
    type: 'CHANGE',
    payload: category,
  };
} ;

export default productReducer;