import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../components/main-components/card/cardSlice';
import productsReducer from './../components/main-components/products/productsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    card: cardReducer
  },
});
