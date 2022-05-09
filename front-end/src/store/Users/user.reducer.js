import { getStoregeItem } from "../../services/storege.service"

const user = JSON.parse(getStoregeItem('user'))
const userReducer = (state = user || null , action) => {
    switch (action.type) {
        case 'USER_LOGIN' :
            return action.payload
        case 'USER_LOGOUT' :
            return null
        default :
        return state
    }
}
export default userReducer