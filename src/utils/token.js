const tokenName = process.env.TOKEN || "token_norman";

export const getToken = () => {
    return `bearer ${localStorage.getItem(tokenName)}`;
}

export const hasToken = () => {
    return localStorage.getItem(tokenName);
}

export const setToken = (token) => {
    return localStorage.setItem(tokenName, token)
}

export const removeToken = () => {
    return localStorage.removeItem(tokenName)
}