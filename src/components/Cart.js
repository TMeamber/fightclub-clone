import React, { Component } from 'react';
import {connect} from 'react-redux'
import { displayCart } from '../ducks/reducer';
import axios from 'axios'
import Cartshoecard from './Cartshoecard';




class Cart extends Component {
  constructor(props){
    super(props)

    this.state = {
      cart: []
    }
    this.refresh = this.refresh.bind(this)
  }
  componentDidMount() {
    axios.get('/api/cart').then(res =>{
      this.setState(()=>{
        return {
          cart: res.data
        }
      })
    } )
  }


  refresh(){
    axios.get('/api/cart').then(res =>{
      this.setState(()=>{
        return {
          cart: res.data
        }
      })
    })
  }
    render() {
      let mappedCart = this.state.cart.map((e,i)=>{
        return <Cartshoecard key={i}
        brand={e.brand}
        name={e.shoe_name}
        price={e.price}
        image={e.image}
        id={e.id}
        refresh={this.refresh}
    />
      })
      return mappedCart;
       
    
    }
}
function mapStateToProps(state) {
  return {
      cart: state.cart
  }
}
export default connect (mapStateToProps, { displayCart })(Cart);
