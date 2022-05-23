import { getAuthorizationHeaders, urlApi } from "./api.service"

export const getClass = async () => {
    const response = await fetch(`${urlApi}/items`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}
export const getClassById = async (itensId) => {
    const response = await fetch(`${urlApi}/items/${itensId}`)
    if (!response.ok) {
        throw new Error('Response not Ok')
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
export const upDateClass = async (classId, classData) => {
    const body = JSON.stringify(classData)
    const response = await fetch (`${urlApi}/items/${classId}`, {
        method: 'PUT',
        body,
        headers: {
            'content-type': 'application/json',
            ...getAuthorizationHeaders()
        }
    })
    return response.json
}