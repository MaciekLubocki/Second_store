import axios from 'axios'
import { serverBaseUrl } from '../api.services'

export const product = {
    getAllProducts: async () => {
        return axios.get(`${serverBaseUrl}/product`)
    },
    getProductById: async id => {
        return axios.get(`${serverBaseUrl}/product/${id}`)
    },
    addNewProduct: async (product) => {
        return axios.post(`${serverBaseUrl}/product/add`, product)
    }
}