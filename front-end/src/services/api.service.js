import { store } from "../store/store"
import { selectUser } from "../store/Users/user.selctor"

export const urlApi = process.env.REACT_APP_API_URL

export const getAuthorizationHeaders = () => {
    const state = store.getState()
    const user = selectUser(state)
    if (user) {
      return {
        'authorization': `Bearer ${user.accessToken}`
      }
    }
    return {}
  }