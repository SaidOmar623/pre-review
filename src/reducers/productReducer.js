import TYPES from './types'

const initialState = {
    items: [
        { brand: 'nokia', model: 'N73', year: '2008', color: 'black'},
        { brand: 'nokia', model: '6600', year: '2005', color: 'white'},
        { brand: 'apple', model: 'iphone7', year: '2020', color: 'black'}
    ]
};

export default function(state = initialState, action) { 
    switch(action.type){
        case TYPES.FETCH_PRODUCT:
            return {
                ...state,
                items: action.payload
            };
        case TYPES.ADD_PRODUCT:
            return {
                ...state,
                items: [...state.items, action.payload.product]
            }
        default:
            return state;
    }
}

export function addProduct(product) { 
    return function (dispatch) { 
        dispatch({
            type: TYPES.ADD_PRODUCT,
            payload: {
                product
            }
        })
    }
 }