import reducer, { changeProducts } from '../store/products';
import { legacy_createStore as createStore } from 'redux'; 



describe('Testing redux store for storefront', () => {
  const store = createStore(reducer);


  test('Reducer should return some initial state', () => {
    const state = store.getState();
  
    // console.log(state);
    expect(state.selectedProducts).toMatchObject([]);
  });
  
  test('select category action should activate a category', () => {
    store.dispatch(changeProducts('clothing'));

    const state = store.getState();
    console.log(state);

    expect(state.selectedProducts).toBeTruthy();
    expect(state.selectedProducts[0].category).toBe('clothing');
  });
});