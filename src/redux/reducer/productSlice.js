import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    Box : false,
  },
  reducers:{
    productState : (state) => {
      state.Box = !state.Box;
    }
  },
  extraReducers:{}
});

export const { productState } = productSlice.actions
export default productSlice.reducer;