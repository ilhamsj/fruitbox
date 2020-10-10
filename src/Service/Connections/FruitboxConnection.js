import axios from 'axios'

export default axios.create({
    // baseURL: "https://foodfood.herokuapp.com/",
    baseURL: "http://fruitbox.test/",
    headers: {
        "Content-type": "application/json"
    }
})