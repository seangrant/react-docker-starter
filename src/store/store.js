import { combineReducers } from 'redux';
import cart from 'store/cart/cart';
import product from 'store/product/product';
export default combineReducers({
  cart,
  product
});
