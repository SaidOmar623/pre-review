import TYPES from '../reducers/types'

// export function fetchProducts() { 
//     return function (dispatch) { 
//         fetch('http://localhost:3001/products')
//         .then(res => res.json())
//         .then(data => 
//             dispatch({
//                 type: TYPES.FETCH_PRODUCT,
//                 payload: data
//             })
//         )
        
//     }
//  }

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