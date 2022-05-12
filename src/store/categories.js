import axios from 'axios';

const initialState = {
  categories: [

    // {
    //   id: 1,
    //   normalizedName: 'outdoor-equipment',
    //   displayName: 'Outdoor Equipment',
    //   description: 'Outdoor Equipment for Any Outdoors Adventure',
    // },
    // {
    //   id: 2,
    //   normalizedName: 'clothing',
    //   displayName: 'Clothing',
    //   description: 'Clothing for All Outdoors Activities',
    // },
  ],

  activeCategory: '',
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return{
        ...state,
        categories: [action.payload]
      }
    case 'ACTIVECATEGORY':
      return {
        ...state,
        activeCategory: action.payload.name
      };
      
    default:
      return state;
  }
}


export const asyncGetCategory = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');

  dispatch(setCatagories(response.data));
};

export const setCatagories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: data
  }
}


export const changeCategory = (category) => {
  return {
    type: 'ACTIVECATEGORY',
    payload: category,
  };
};

export default categoryReducer;
