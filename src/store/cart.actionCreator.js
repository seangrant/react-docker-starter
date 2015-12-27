import actionTypes from './actionTypes';

export const addCartItem => cartItem => {
  return {
    type: actionTypes.ADD_CART_ITEM,
    payload: cartItem
  }
}
