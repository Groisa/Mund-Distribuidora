export function productsCartReducer (state = [] , action) {
    if (action.type === 'ADD_TO_CART' ) {
        const newCart = [ ...state ]
        const productFound = newCart.findIndex(
            product => product.id === action.payload.id)
        if(productFound !== -1 ) {
            newCart[productFound].qty++
            return newCart
        } else {
            newCart.push(action.payload)
            return newCart
        }
    }
    if (action.type === 'REMOVE_OF_CART') {
        const newCart = state.filter(
            product => product.id !== action.payload
        )
        return newCart
    }
    if (action.type === 'REMOVE_QTY') {
        const newCart = [...state]
        const qtyFound = newCart.findIndex (
            product => product.qty === action.payload
        )
        if(qtyFound !== -1 ) {
            newCart[qtyFound].qty--
            return newCart 
        }
    }
    return state
}