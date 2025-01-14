import axios from "axios";

export const getProducts = (callback) => {
    axios.get('https://fakestoreapi.com/products')
        .then(res => {
            console.log('get=>', res)
            callback(res.data)
        })
        .catch(err => {
            console.log('err=>', err)
        })
}

export const getProductDetail = (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            console.log('get=>', res)
            callback(res.data)
        })
        .catch(err => {
            console.log('err=>', err)
        })
}