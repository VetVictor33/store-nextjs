export const getItem = (key) => {
    const item = localStorage.getItem(key)
    const jsonItem = JSON.parse(item)
    return jsonItem
}

export const setItem = (key, value) => {
    if (!key || !value) return
    const stringfiedValue = JSON.stringify(value)
    return localStorage.setItem(key, stringfiedValue)
}

export const removeItem = (key) => {
    return localStorage.removeItem(key)
}

export const cleanItens = () => {
    localStorage.clear();
    return true
}