//import
    import axios from 'axios';

//URL base create
const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api;