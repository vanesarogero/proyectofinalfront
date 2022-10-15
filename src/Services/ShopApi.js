export function getAllProducts() {
    return fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
}

export function getProductDetails(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
}

export function getCategories() {
    return fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
}