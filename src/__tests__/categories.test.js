import reducer, { changeCategory } from '../store/categories.js';
import { legacy_createStore as createStore } from 'redux'; 


describe('Testing redux store for storefront', () => {
  const store = createStore(reducer);


  test('Reducer should return some initial state', () => {
    const state = store.getState();
  
    console.log(state);
    expect(state.activeCategory).toBeFalsy();
    expect(state.activeCategory).toBe('');
  });
  
  test('select category action should activate a category', () => {
    store.dispatch(changeCategory('test'));

    const state = store.getState();

    expect(state.activeCategory).toBe('test');
  });
});