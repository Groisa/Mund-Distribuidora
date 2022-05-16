import { getAuthorizationHeaders, urlApi } from "./api.service"

export const getProducts = async (productid) => {
    const response = await fetch(`${urlApi}/items/${productid}?_embed=products`)
    if (!response.ok) {
        throw new Error('Response not Ok')
    }
    return response.json()
} 
export const delProducs = async (productsId) => {
    const response = await fetch (`${urlApi}/products/${productsId}`, {
        method: 'DELETE',
        headers : getAuthorizationHeaders()
    })
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
}
export const getProductById = async (productID) => {
    const response = await fetch(`${urlApi}/products/${productID}`)
    if (!response.ok) {
        throw new Error('Response not Ok')
    }
    return response.json()
} 
export const upDateProdutcs = async (productID, productData) => {
    const body = JSON.stringify(productData)
    const response = await fetch (`${urlApi}/products/${productID}`, {
        method: 'PUT',
        body,
        headers: {
            'content-type': 'application/json',
            ...getAuthorizationHeaders()
        }
    })
    return response.json
}