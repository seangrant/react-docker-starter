import { createStore } from 'redux';
import { ADD_CART_ITEM } from '../actionTypes';

export default (state = [], action) => {

  switch (action.type) {
    case ADD_CART_ITEM:
        const { payload } = action;
        return [
          ...state,
          {
            id: payload.id,

          }
        ];
    default:
      return state;
  }
}
