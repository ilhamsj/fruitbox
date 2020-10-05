import http from './Connections/FruitboxConnection'

const getAll = () => {
    return http.get("/api/v1/categories")
}

const getById = id => {
    return http.get(`/api/v1/categories/${id}`)
}

const postData = data => {
    return http.post(`/api/v1/categories`, data)
}

const updateData = (id, data) => {
    return http.put(`/api/v1/categories/${id}`, data)
}

const deleteData = id => {
    return http.delete(`/api/v1/categories/${id}`)
}

export default {
    getAll,
    getById,
    postData,
    updateData,
    deleteData
}