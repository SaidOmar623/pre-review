import TYPES from '../reducers/types'

export function addToCart(product) { 
    return function (dispatch) { 
        dispatch({
            type: TYPES.ADD_TO_CART,
            payload: {
                product
            }
        })
        // const {data} = await axios.get('http://localhost:3001/products');
        // dispatch({
        //     type: TYPES.FETCH_POST,
        //     payload: data
        // })
    }
 }

 export function removeFromCart(productId) {
     return function(dispatch){
        dispatch({
            type: TYPES.REMOVE_FROM_CART,
            payload: {
                productId: productId
            }
        })
     }
     
 }
 export function updateCartQuantity(productId, quantity) {
    return function(dispatch){
       dispatch({
           type: TYPES.UPDATE_CART_QUANTITY,
           payload: {
               productId,
               quantity: quantity
           }
       })
    }
    
}