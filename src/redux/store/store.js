import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../reducer/modalSlice";

const store = configureStore({
  reducer : {
    deal : modalSlice,
  }
})

export default store;