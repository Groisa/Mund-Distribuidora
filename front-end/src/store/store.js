import { createStore } from 'redux'
import userReducer from './Users/user.reducer'


export const store = createStore(
    userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )