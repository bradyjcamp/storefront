const initialState = {
  categories: [

    {
      id: 1,
      normalizedName: 'outdoor-equipment',
      displayName: 'Outdoor Equipment',
      description: 'Outdoor Equipment for Any Outdoors Adventure',
    },
    {
      id: 2,
      normalizedName: 'clothing',
      displayName: 'Clothing',
      description: 'Clothing for All Outdoors Activities',
    },
  ],

  activeCategory: '',
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        activeCategory: action.payload
      };

    default:
      return state;
  }
}


export const changeCategory = (category) => {
  return {
    type: 'CHANGE',
    payload: category,
  };
};

export default categoryReducer;
