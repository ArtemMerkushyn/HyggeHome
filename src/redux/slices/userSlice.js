import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthorized: false,
    user: {},
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isAuthorized = true;
      state.user = action.payload;
    },
    setLoggedOut: (state) => {
      state.isAuthorized = false;
      state.user = {};
    },
  }
});

export const { setLoggedIn, setLoggedOut } = userSlice.actions;

export default userSlice.reducer;