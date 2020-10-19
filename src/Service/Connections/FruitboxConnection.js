import axios from 'axios'

export default axios.create({
    baseURL: "http://foodfood.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
})