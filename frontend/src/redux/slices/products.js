import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Action
export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await fetch('/api/products/');
    return response.json();
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        product: [],
        isError: false,

    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;  
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) =>{
            state.isError = true;
        });
    }
});

export default productsSlice.reducer;