import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from 'counter/counter';
import store from 'store/createStore';
import Cart from 'cart/cart';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div>
          <Counter/>
          <Cart/>
        </div>
      </Provider>
    )
  }
}
