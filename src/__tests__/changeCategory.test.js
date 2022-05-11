import { legacy_createStore as createStore, combineReducers } from 'redux';
import categoryReducer from '../store/categories';
import { changeCategory } from '../store/categories';
import productReducer from '../store/products';

describe('Testing the category state features', () => {
  
  const reducers = combineReducers({
    category: categoryReducer,
    products: productReducer,
  });

  const store = createStore(reducers);

  test('Store should have list of categories', () => {

    const state = store.getState();
    // console.log(state);

    expect(state.category.categories[0].normalizedName).toBe('outdoor-equipment');
  });

  test('CHANGE action should change active category and selected products', () => {
    let { category }= store.getState();
    let { products } = store.getState();
    
    store.dispatch(changeCategory(category.categories[0].normalizedName));
  
    const state = store.getState()
    
    expect(state.category.activeCategory).toBe('outdoor-equipment');
    expect(state.products.selectedProducts[0].category).toBe('outdoor-equipment');
  });
});