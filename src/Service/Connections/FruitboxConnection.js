import axios from 'axios'

export default axios.create({
    baseURL: "http://foodfood.herokuapp.com/",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9mb29kZm9vZC5oZXJva3VhcHAuY29tXC9hcGlcL3YxXC9hdXRoXC91c2VyXC9sb2dpbiIsImlhdCI6MTYwMzY0NjI3OSwiZXhwIjoxNjAzNjQ5ODc5LCJuYmYiOjE2MDM2NDYyNzksImp0aSI6IktCRUptOHRpUGdMbDlRMjIiLCJzdWIiOjUxLCJwcnYiOiIwNDJkZWRmYjhjZmM3MTBkZThhODliMThmN2E0NmE5ZTk2YWRlMzhlIn0.1wV6Ty6Lcs3riLvpHKEmkn39H6fp7KsibWgxi9SR4Mk"
    }
})