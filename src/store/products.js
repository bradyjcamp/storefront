import axios from 'axios';

const initialState = {
  products: [],
  selectedProducts: [],
  productSelected: []
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
      };
      case 'PRODUCT_VIEW':
        return{
          ...state,
          productSelected: state.products.filter(product => product._id === action.payload)
        };
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

export const displayProduct = (id) => {
  return{
    type: 'PRODUCT_VIEW',
    payload: id,
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