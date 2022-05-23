export const setStoregeItem = (key, value) => {
    localStorage.setItem(key, value)
}
export const setRemoveItem = (key) => {
    localStorage.removeItem(key)
}
export const getStoregeItem = (key) => {
    return localStorage.getItem(key)
}