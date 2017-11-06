import axios from 'axios';

const initialState = {
    user: {},
    getbrand: [],
    cart: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_PRODUCT_BRAND = 'GET_PRODUCT_BRAND';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

//gets users info when signed in from auth0
export function getUserInfo() {
    const user = axios.get('/auth/me').then(res => res.data)
    return {
        type: GET_USER_INFO,
        payload: user
    }
}

//be able to go and display the brands on Brand page based on what brand is clicked on
export function getbrand(brand) {
    const getbrand = axios.get(`/api/product/brand/${brand}`).then(res => res.data)
    return {
        type: GET_PRODUCT_BRAND,
        payload: getbrand
    }
}


//adds product to cart
export function addToCart(val) {
    return {
        type: ADD_TO_CART,
        payload: val
    }
}
//removes product from the cart
export function removeFromCart(val) {
    return {
        type: REMOVE_FROM_CART,
        payload: val
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_PRODUCT_BRAND + '_FULFILLED':
            return Object.assign({}, state, { brand: action.payload })
        case ADD_TO_CART:
            const cartPlusOne = state.cart.slice();
            cartPlusOne.push(action.payload);
            return Object.assign({}, state, { cart: cartPlusOne });
        case REMOVE_FROM_CART:
            const cartMinusOne = state.cart.slice();
            cartMinusOne.splice(action.payload, 1);
            return Object.assign({}, state, { cart: cartMinusOne });

        default:
            return state;
    }
}