import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        cartItems: [],
        cartTotalQuantity: 0, 
        cartTotalAmount: 0
    },
    reducers :{
        addToCart(state, action) {
            const tempProduct = { ...action.payload, qty: 1};
            state.cartItems.push(tempProduct);
        },
    },
})

export const  { addToCart } = cartSlice.actions;

export default cartSlice.reducer;












