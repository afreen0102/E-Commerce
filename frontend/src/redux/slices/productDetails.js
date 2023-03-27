import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Action
export const fetchProductDetails = createAsyncThunk('fetchProductDetails', async (id) => {
    const response = await fetch(`/api/products/${id}`);
    return response.json();
})

const productdetailsSlice = createSlice({
    name: 'productdetails',
    initialState: {
        isLoading: false,
        prd: [],
        isError: false,

    },
    extraReducers:(builder) => {
        builder.addCase(fetchProductDetails.pending, (state, action) => {
            state.isLoading = true;  
        });
        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.prd = action.payload;
        });
        builder.addCase(fetchProductDetails.rejected, (state, action) => {
            state.isError = true;
        });
    }
});

export default productdetailsSlice.reducer;