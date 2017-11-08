import React, { Component } from 'react';
import { connect } from 'react-redux'
import { displayCart } from '../ducks/reducer';
import axios from 'axios'
import Cartshoecard from './Cartshoecard';




class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: [],
      total: 0
    }
    this.refresh = this.refresh.bind(this)
  }
  componentDidMount() {
    axios.get('/api/cart').then(res => {
      var total = res.data.reduce((a, b) => a + Number(b.price.split('$')[1]), 0)
      console.log(total);
      this.setState(() => {
        return {
          cart: res.data,
          total: total
        }
      })
    })
  }


  refresh() {
    axios.get('/api/cart').then(res => {
      var total = res.data.reduce((a, b) => a + Number(b.price.split('$')[1]), 0)
      console.log(total);
      this.setState(() => {
        return {
          cart: res.data,
          total: total
        }
      })
    })
  }
  render() {
    let mappedCart = this.state.cart.map((e, i) => {
      return <Cartshoecard key={i}
        brand={e.brand}
        name={e.shoe_name}
        price={e.price}
        image={e.image}
        id={e.id}
        refresh={this.refresh}
      />
    })
    return (
      <div>
        {mappedCart}
        <h1>Total: ${this.state.total}</h1>
      </div>
    )
  }

}
function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps, { displayCart })(Cart);
