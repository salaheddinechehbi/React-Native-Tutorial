import axios from "axios";

const dev = '127.0.0.1:8000'
const preprod = 'https://api.hotellom.com'

const http = axios.create({
    baseURL: `${preprod}`,
    responseType: 'json',
})

export default http