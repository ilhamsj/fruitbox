import axios from 'axios'

export default axios.create({
    baseURL: "https://api.imgbb.com/",
    headers: {
        "Content-type": "multipart/form-data"
    }
})