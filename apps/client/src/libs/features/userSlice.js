import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { setUser, removeUser, setToken, removeToken } = userSlice.actions;

export default userSlice.reducer;
