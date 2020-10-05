import axios from 'axios'

export default axios.create({
    baseURL: "https://foodfood.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
})