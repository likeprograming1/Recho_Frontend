import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin : false,
  },
  reducers: {
    loginState : (state) => {
      state.isLogin = true;
    },
    logoutState : (state) => {
      state.isLogin = false;
    }
  },
});
export const { loginState, logoutState } = loginSlice.actions;
export default loginSlice.reducer;
