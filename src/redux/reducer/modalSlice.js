import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name : "modal",
  initialState : {
    modal : false,
    back: false,
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
    }
  }
});
export const {modalstate, backstate, closestate} = modalSlice.actions;
export default modalSlice.reducer;