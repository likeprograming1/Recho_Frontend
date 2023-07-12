import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    Box : false,
    data : [],
  },
  reducers:{
    productState : (state) => {
      state.Box = !state.Box;
    },
    dataState : (state, action) => {
      state.data.push(action.payload.data)
    }
  },
  extraReducers:{}
});

export const { productState, dataState } = productSlice.actions;
export default productSlice.reducer;