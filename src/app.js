import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from 'counter/counter';
import store from 'store/createStore';

export default class App extends Component {
  render() {
    const { value } = this.props;
    return (
      <Provider store={ store }>
        <Counter/>
      </Provider>
    )
  }
}
