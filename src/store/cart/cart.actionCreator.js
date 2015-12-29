import { ADD_CART_ITEM } from '../actionTypes';

export const addCartItem = cartItem => {
  return {
    type: ADD_CART_ITEM,
    payload: cartItem
  }
}
