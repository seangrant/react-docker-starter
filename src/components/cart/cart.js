import React, { Component } from 'react';
import { defer } from 'react-fetcher';
import { connect } from 'react-redux';
import { getProducts } from 'store/products/productActions';
import * as CartActions from 'store/products/productActions';

const mapStateToProps = state => {
  return {
    state
  }
}

@connect(mapStateToProps, CartActions)
export default class Cart extends Component{

  componentDidMount() {
    this.props.getProducts()
  }
  render(){

    console.log('cart', this.props);
    return (
      <div>Shopping Cart</div>
    )
  }
}
