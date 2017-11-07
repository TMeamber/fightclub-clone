import React, { Component } from 'react';
import {connect} from 'react-redux'
import { displayCart } from '../ducks/reducer';
import axios from 'axios'




class Cart extends Component {
  constructor(props){
    super(props)

    this.state = {
      cart: []
    }
  }
  componentDidMount() {
    axios.get('/api/cart').then(res =>{
      console.log(res)
    } )
  }
    render() {
      return (
        <div>
       {this.state.cart}
       </div>
    )
    }
}
function mapStateToProps(state) {
  return {
      cart: state.cart
  }
}
export default connect (mapStateToProps, { displayCart })(Cart);
