import React, { Component } from 'react';
import './Brand.css'
import {connect} from 'react-redux';
import {getbrand} from '../ducks/users';



class Brand extends Component {
    constructor(props){
        super()


        this.state = {

    }
}
    render() {
        return (
            <div className='Brand'>
                <h1>Brand will be here</h1>  
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        brand: state.brand
    }
}
export default connect(mapStateToProps, {getbrand})(Brand);
