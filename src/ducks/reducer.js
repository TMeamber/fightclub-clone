import axios from 'axios';

const initialState = {
    user: {},
    getbrand: [],
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_PRODUCT_BRAND = 'GET_PRODUCT_BRAND';
const DISPLAY_CART = 'DISPLAY_CART'
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
export function displayCart(products){
    const displayCart = axios.get('/api/cart').then(res => res.data)
    return {
        type: DISPLAY_CART,
        payload: displayCart
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_PRODUCT_BRAND + '_FULFILLED':
            return Object.assign({}, state, { brand: action.payload })
            case DISPLAY_CART + '_FULFILLED':
            return Object.assign({}, state, {displayCart: action.payload}  )
        default:
            return state;
    }
}