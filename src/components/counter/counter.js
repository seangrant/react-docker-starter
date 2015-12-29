import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CounterActions from 'store/counter/CounterActions';
const mapStateToProps = ({ counter }) => {
  return {
    value: counter
  }
}

@connect(mapStateToProps, CounterActions)
export default class Counter extends Component {

  render = () => {
    const { value, increment, decrement } = this.props;
    return (
      <div>
        <button onClick={ decrement }>-</button>
        <span>{ value }</span>
        <button onClick={ increment }>+</button>
      </div>
    )
  }
}
