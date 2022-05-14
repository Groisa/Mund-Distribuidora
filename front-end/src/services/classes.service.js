import { getAuthorizationHeaders, urlApi } from "./api.service"

export const getClass = async () => {
    const response = await fetch(`${urlApi}/items`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}
export const delClass = async (classId) => {
    const response = await fetch (`${urlApi}/items/${classId}`, {
        method: 'DELETE',
        headers : getAuthorizationHeaders()
    })
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
}