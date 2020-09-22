import http from './Connections/FruitboxConnection'

const getAll = () => {
    return http.get("/api/v1/categories")
}

const getById = id => {
    return http.get(`/categories/${id}`)
}

const storeData = data => {
    return http.post(`/categories`, data)
}

const updateData = (id, data) => {
    return http.put(`/categories/${id}`, data)
}

const deleteData = id => {
    return http.delete(`/categories/${id}`)
}

export default {
    getAll,
    getById,
    storeData,
    updateData,
    deleteData
}