import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: '',
  },
  reducers: {
    getCategories(state, action) {
      return {
        ...state,
        categories: [action.payload]
      }
    },
    activeCategory(state, action){
      return{
        ...state,
        activeCategory: action.payload.name
      }
    }
  }
});



export const asyncGetCategory = () => async (dispatch, getState) => {
  const { getCategories  } = categoriesSlice.actions;
  try{
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(getCategories(response.data));
  } catch (e) {
    console.log('get category error', e);
  }
};

// export const setCatagories = (data) => {
//   return {
//     type: 'GET_CATEGORIES',
//     payload: data
//   }
// }


// export const changeCategory = (category) => {
//   return {
//     type: 'ACTIVECATEGORY',
//     payload: category,
//   };
// };

export default categoriesSlice;
