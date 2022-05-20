import { combineReducers, createStore } from 'redux'
import { productsCartReducer } from './ProductsCart/productsCart.reducer'
import userReducer from './Users/user.reducer'

const rootReducer = combineReducers({
    userData : userReducer,
    cartProduct : productsCartReducer
})
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )