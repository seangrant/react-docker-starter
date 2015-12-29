import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_COMPLETE } from '../actionTypes';
import cart from '../../api/cart-api-client/cart-api-client';

export const getProducts = () => dispatch => {
  dispatch({ type: GET_PRODUCTS_BEGIN })

  return cart.get().then(products => {
    console.log('products', products);
    dispatch({type: GET_PRODUCTS_COMPLETE, payload: products});
  });

}
