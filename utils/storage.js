export const getItem = (key) => {
    return localStorage.getItem(key)
}

export const setItem = (key, value) => {
    if (!key || !value) return
    return localStorage.setItem(key, value)
}

export const removeItem = (key) => {
    return localStorage.removeItem(key)
}

export const cleanItens = () => {
    localStorage.clear();
    return true
}