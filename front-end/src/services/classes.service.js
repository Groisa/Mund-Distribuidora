import { urlApi } from "./api.service"

export const getClass = async () => {
    const response = await fetch(`${urlApi}/items`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}
