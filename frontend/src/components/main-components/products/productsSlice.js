import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../../services/api.services';

const {product: productApi} = api;

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        currentProduct: null
    },
    reducers: {
        getAllProducts: (state, action) => {
            const data = action.payload
            state.products = data
        },
        getProductById: (state, action) => {
            const data = action.payload
            state.currentProduct = data
        },
        deleteCurrentProductData: state => {
            state.currentProduct = null;
        },
        addProduct: (state, action) => {
            const data = action.payload
            state.products = [...state.products, data]
        }
    }
})

// actions 
export const {addProduct, getAllProducts, getProductById, deleteCurrentProductData} = productsSlice.actions

// async action
export const getAllProductsAsync = () => dispatch => {
    productApi.getAllProducts().then(({data}) => {
        dispatch(getAllProducts(data));
    }).catch(error => {
        console.log(error)
    })
  };

  export const getProductByIdAsync = id => dispatch => {
    productApi.getProductById(id).then(({data}) => {
        dispatch(getProductById(data));
    }).catch(error => {
        console.log(error)
    })
  };

 export const addProductAsync = product => dispatch => {
    const {name, cost} = product
    productApi.addNewProduct({name,cost}).then(({data}) => {
        dispatch(addProduct(data));
    }).catch(error => {
        console.log(error)
    })
  };

// values
export const products = state => state.products.products;
export const currentProduct = state => state.products.currentProduct;

export default productsSlice.reducer;