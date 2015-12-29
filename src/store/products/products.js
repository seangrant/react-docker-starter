import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_COMPLETE
} from '../actionTypes';

const initialState{
  products: [],
  isFetching: false
}
export default (state = initialState, action) => {
  switch (action.type) {

    case GET_PRODUCTS_COMPLETE:
        const { payload } = action;
        return [
          ...state,
          products: payload
        ];
    default:
      return state;
  }
}

export const getProducts = () => dispatch => {
  dispatch({type: GET_PRODUCTS_BEGIN});
  
}
