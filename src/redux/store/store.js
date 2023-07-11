import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../reducer/modalSlice";
import productSlice from "../reducer/productSlice";

const store = configureStore({
  reducer : {
    deal : modalSlice,
    product : productSlice,
  }
})

export default store;