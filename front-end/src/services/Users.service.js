import { urlApi } from "./api.service"

export const login = async (credencialsData) => {
    const body = JSON.stringify(credencialsData)
    const response = fetch(`${urlApi}/login`, {
        method: 'POST',
        body,
        headers: {
            'content-type' : 'application/json'
        }
    })
    if(!response.ok){
        throw new Error('Response not Ok')
    }
}