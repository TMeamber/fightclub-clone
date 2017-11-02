import axios from 'axios';

const initialState = {
    user: {},
    getbrand: ""
}

const GET_USER_INFO = 'GET_USER_INFO'

export function getUserInfo() {
    const user = axios.get('/auth/me').then(res => res.data)
    return {
        type: GET_USER_INFO,
        payload: user
    }
}

const GET_PRODUCT_BRAND = 'GET_PRODUCT_BRAND'
//be able to go and display the brands on Brand page based on what brand is clicked on
export function getbrand(brand){
    const getbrand = axios.get(`/api/product/brand/${brand}`).then(res => res.data)
    return {
        type: GET_PRODUCT_BRAND,
        payload: getbrand
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})
            case GET_PRODUCT_BRAND + '_FULFILLED':
            return Object.assign({}, state, {brand: action.payload})
        default:
            return state;
    }
}