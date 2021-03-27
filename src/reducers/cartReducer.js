import TYPES from './types'

const initialState = {
    items: []
};

export default function(state = initialState, action) { 
    let cart = state.items;
    switch(action.type){
        case TYPES.ADD_TO_CART:
            cart.push(action.payload.product)
            return {
                ...state,
                items: cart
            };
        case TYPES.REMOVE_FROM_CART:
            return {
                ...state,
                items: cart.filter(item => item.id != action.payload.productId)
            };
        case TYPES.UPDATE_CART_QUANTITY:
            let item = cart.find(item => item.id === action.payload.productId);
            console.log(item);
            let newCart = cart.filter(item => item.id != action.payload.productId);
            item.quantity = action.payload.quantity;
            newCart.push(item);
            return {
                ...state,
                items: newCart
            };
        default:
            return state;
    }
}