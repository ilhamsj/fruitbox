import axios from 'axios'

export default axios.create({
    baseURL: "https://fruit-service.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    },
})