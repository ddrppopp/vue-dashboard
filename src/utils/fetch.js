import Axios from 'axios'
import Cookie from 'js-cookie'
const axios = Axios.create({
    baseURL: 'http://localhost:3000'
})

axios.interceptors.request.use( config => {
    config.headers['ds-token'] = Cookie['ds-token'];
    return config
})
export default axios