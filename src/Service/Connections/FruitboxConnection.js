import axios from 'axios'

export default axios.create({
    // baseURL: "https://fruit-service.herokuapp.com",
    baseURL: "http://fruitbox.test/",
    headers: {
        "Content-type": "application/json"
    },
})