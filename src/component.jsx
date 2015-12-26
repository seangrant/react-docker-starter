import React, { Component } from 'react';

export default class Hello extends React.Component {

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={ onDecrement }>-</button>
        <h1>{ value }</h1>
        <button onClick={ onIncrement }>+</button>
      </div>
    )

  }
}
