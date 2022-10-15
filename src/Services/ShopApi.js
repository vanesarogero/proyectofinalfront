export function getAllProducts() {
    return fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
}

export function getCategories() {
    return fetch('https://fakestoreapi2.com/products/categories')
        .then(res=>res.json())
}