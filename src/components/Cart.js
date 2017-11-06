import React, { Component } from 'react';
import {connect} from 'react-redux'
import { displayCart } from '../ducks/reducer';





class Cart extends Component {
  componentDidMount() {
    this.props.displayCart(this.props.match.params.displayCart)
}
    render() {
      return (
        <h1>Cart Page</h1>
      )
    }
}
function mapStateToProps(state) {
  return {
      cart: state.cart
  }
}
export default connect (mapStateToProps, { displayCart })(Cart);
