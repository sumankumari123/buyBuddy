import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products"
      );

      return response.data.products;
    } catch (error) {
      return rejectWithValue("Failed to fetch products");
    }
  }
);



const initialState = {
fechItem:[],
loading:false,
error:null,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // Request started
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Request succeeded
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Contains data returned from thunk
      })
      // Request failed
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default productSlice.reducer;
