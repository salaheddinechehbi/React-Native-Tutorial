import axios from "axios";

const dev = 'http://192.168.56.1'
const preprod = 'https://api.hotellom.com'

const http = axios.create({
    baseURL: `${preprod}`,
    responseType: 'json',
})

export default http