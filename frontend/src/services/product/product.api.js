import axios from 'axios'
import { serverBaseUrl } from '../api.services'

export const product = {
    getAllProducts: async () => {
        return axios.get(`${serverBaseUrl}/product`)
    },
    addNewProduct: async (product) => {
        return axios.post(`${serverBaseUrl}/product/add`, product)
    }
}