import http from './Connections/FruitboxConnection'

const getAll = () => {
    return http.get("/api/v1/products")
}

const getById = id => {
    return http.get(`/api/v1/products/${id}`)
}

const postData = data => {
    return http.post(`/api/v1/products`, data)
}

const updateData = (id, data) => {
    return http.put(`/api/v1/products/${id}`, data)
}

const deleteData = id => {
    return http.delete(`/api/v1/products/${id}`)
}

export default {
    getAll,
    getById,
    postData,
    updateData,
    deleteData
}