import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name : "modal",
  initialState : {
    modal : false,
  },
  reducers : {
    modalstate : (state) => {
      state.modal = !state.modal;
    }
  }
});
export const {modalstate} = modalSlice.actions;
export default modalSlice.reducer;