import { urlApi } from "./api.service"

export const getProducts = async (productid) => {
    const response = await fetch(`${urlApi}/items/${productid}?_embed=products`)
    if (!response.ok) {
        throw new Error('Response not Ok')
    }
    return response.json()
} 