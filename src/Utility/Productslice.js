import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    allProductList: [],
    inpVal: "",
  },
  reducers: {
    handleInpVal:(state,action)=>{
      state.inpVal=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.allProductList = action.payload;
      state.productList = action.payload;
    });
  },
});

export const {handleInpVal} = productSlice.actions
export default productSlice.reducer;
