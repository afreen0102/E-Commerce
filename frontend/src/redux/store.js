import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/products'
import productdetailsReducer from './slices/productDetails'
import cartReducer from './slices/cartSlice'
export const store = configureStore({
    reducer: {
        products: productsReducer,
        productdetails:productdetailsReducer,
        cart: cartReducer,
    },
})