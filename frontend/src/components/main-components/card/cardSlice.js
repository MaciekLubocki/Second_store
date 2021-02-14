import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        card: []
    },
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;
            const foundProductInCard = state.card.find(({_id}) => _id === product._id);
            if(foundProductInCard){
                foundProductInCard.quantity++;
            }else {
                const cardProduct = {
                    ...product,
                    quantity: 1
                }
                state.card.push(cardProduct)
            }
            
        },
        changeQuantity: (state, action) => {
            const {id, quantity} = action.payload
            const foundProduct = state.card.find(({_id}) => _id === id);
            foundProduct.quantity = quantity;
        },
        removeProduct: (state, action) => {
            const productId = action.payload
            state.card = state.card.filter(({_id}) => _id !== productId)
        }
    }
})

// actions 
export const {addProduct, removeProduct, changeQuantity} = cardSlice.actions

// values
export const card = state => state.card.card;

export default cardSlice.reducer;