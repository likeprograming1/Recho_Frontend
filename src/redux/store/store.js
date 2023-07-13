import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../reducer/modalSlice";
import productSlice from "../reducer/productSlice";
import loginSlice from "../reducer/loginSlice";

const store = configureStore({
  reducer : {
    deal : modalSlice,
    product : productSlice,
    login : loginSlice,
  }
})

export default store;