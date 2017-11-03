import React, { Component } from 'react';
import './Brand.css'
import { connect } from 'react-redux';
import { getbrand } from '../ducks/reducer';
import Shoecard from './Shoecard'


class Brand extends Component {

    componentWillReceiveProps(nextProps){
        nextProps.getbrand(nextProps.match.params.brand)
    }





    render() {
            const brandArr = this.props.brand ?
                this.props.brand.map((e, i) => {
                    return (
                        <Shoecard key={i}
                            brand={e.brand}
                            name={e.shoe_name}
                            price={e.price}
                            image={e.image}
                        />
                    )
                }) : null;
            return (
                <div className='Brand'>
                    <div>
                        {brandArr} 
                    </div>
                </div>
            )
        }
    }


function mapStateToProps(state) {
    return {
        brand: state.brand
    }
}
export default connect(mapStateToProps, { getbrand })(Brand);
