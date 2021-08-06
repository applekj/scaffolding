import axios from '../utils/axios'
import Api from '@/project.config/api'

export const getData = params => {
    return axios.get(Api.getData, { params })
}
