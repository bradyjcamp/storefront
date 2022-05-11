import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'; 
import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'thunk.js'

import categoryReducer from './categories';
import productReducer from './products'
import cartReducer from './cart'

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
  // applyMiddleware(thunk) goes in composeWithDevTools
}
