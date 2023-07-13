import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name : "modal",
  initialState : {
    modal : false,
    back: false,
    cate : false,
  },
  reducers : {
    modalstate : (state) => {
      state.modal = !state.modal;
    },
    backstate : (state) => {
      state.back = !state.back;
    },
    closestate : (state) => {
      state.modal = false;
      state.back = false;
    },
    catestate : (state) => {
      state.cate = !state.cate;
    }
  }
});
export const {modalstate, backstate, closestate, catestate} = modalSlice.actions;
export default modalSlice.reducer;