import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import counter from 'store/counter/counter';
import cart from 'store/cart/cart';

const reducers = {
  counter,
  cart,
};

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
export default createStoreWithMiddleware(reducer);
