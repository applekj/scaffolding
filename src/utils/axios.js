import axios from 'axios'
import { message } from 'antd'

axios.defaults.timeout = 30000

axios.interceptors.request.use(config => {
    // config.headers.Authorization = `${localStorage.getItem('access_token')}`;
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    //如果请求错误，进行提示
    if (response.data.code != 0) {
        message.error(response.data.msg)
    }

    return response.data
}, error => {
    if (error.response) {
        message.error(error.response.msg)
    }
})

export default axios