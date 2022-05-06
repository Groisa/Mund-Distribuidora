import { urlApi } from "./api.service"
import { setStoregeItem } from "./storege.service"

export const login = async (credencialsData) => {
    const response = await fetch(`${urlApi}/login`, {
        method: 'POST',
        body: JSON.stringify(credencialsData),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await response.json()
    if (!response.ok) {
        const message = data === 'Incorrect password' || data === 'Cannot find user'
            ? 'Credentials invalid.'
            : 'Response not ok.'
        throw new Error(message)
    }
    const userData = {
        accessToken: data.accessToken,
        ...data.user
      }
    setStoregeItem('user', JSON.stringify(userData))
    return userData
}