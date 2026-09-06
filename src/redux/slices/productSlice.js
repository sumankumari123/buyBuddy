import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      // console.log(response.data.products)

      return response.data.products;
    } catch (error) {
      return rejectWithValue("Failed to fetch products");
    }
  },
);

const initialState = {
  fechItems: [],
  loading: false,
  error: null,
  cartItem: JSON.parse(localStorage.getItem("cartItem")) || [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state?.cartItem?.push(action?.payload)
      localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cartItem),
      );
    },
    removeCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (cart) => cart.id !== action.payload,
      );
      localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cartItem),
      );
    },
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
        state.fechItems = action.payload; // Contains data returned from thunk
      })
      // Request failed
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});
export const { addToCart, removeCart } = productSlice.actions;

export default productSlice.reducer;
