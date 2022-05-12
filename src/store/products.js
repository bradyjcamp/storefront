import axios from 'axios';

const initialState = {
  products: [
    // {
    //   id: 1,
    //   name: 'Tent',
    //   category: 'outdoor-equipment',
    //   description: 'A sturdy 10 x 10 tent for mild weather',
    //   price: 50,
    //   inventory: 15
    // },
    // {
    //   id: 2,
    //   name: 'Backpack',
    //   category: 'outdoor-equipment',
    //   description: 'A 50 Liter Backpack',
    //   price: 150,
    //   inventory: 5
    // },
    // {
    //   id: 3,
    //   name: 'Boots',
    //   category: 'clothing',
    //   description: 'Hiking Boots',
    //   price: 95,
    //   inventory: 10
    // },
    // {
    //   id: 4,
    //   name: 'Hiking Pants',
    //   category: 'clothing',
    //   description: 'Weatherproof rugged material',
    //   price: 49,
    //   inventory: 20
    // }
  ],
  selectedProducts: []
}

function productReducer(state = initialState, action){
  switch(action.type){
    case 'GET_PRODUCTS':
      return{
        ...state,
        products: action.payload,
      };
    case 'SELECTED':
      return{
        ...state,
        selectedProducts: state.products.filter(product => product.category === action.payload)
      };
    case 'ADD_TO_CART':
      return{
        ...state,
        products: state.products.map(product => {
          if (product.name === action.payload.name && product.inStock > 0){
              product.inStock = product.inStock - 1
          }
          return product;
        })
      };
    case 'REMOVE_FROM_CART':
      return{
        ...state,
        products: state.products.map(product => {
          if (product.name === action.payload.name){
              product.inStock = product.inStock + 1
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
    type: 'SELECTED',
    payload: category,
  };
};

export const asyncGetProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');

  dispatch(setProducts(response.data.results));
}

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data
  }
}



export default productReducer;