import axios from 'axios'

export default axios.create({
    baseURL: "http://fruitbox.test/",
    headers: {
        "Content-type": "application/json"
    }
})