import http from './Connections/ImgbbConnection'

const postData = data => {
    return http.post(`1/upload`, data)
}

export default {
    postData
};