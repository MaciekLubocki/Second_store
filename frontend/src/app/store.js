import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './../components/main-components/products/productsSlice';

export default configureStore({
  reducer: {
    products: productsReducer
  },
});
