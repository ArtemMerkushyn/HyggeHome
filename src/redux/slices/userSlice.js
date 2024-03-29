import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userData: {}
};

const savedToken = JSON.parse(localStorage.getItem('token'));
const persistedToken = savedToken ? savedToken : initialState.token;

export const userSlice = createSlice({
  name: 'user',
  initialState: { token: persistedToken },
  reducers: {
    setLoggedIn: (state, action) => {
      state.userData = action.payload.userData
      state.token = action.payload.token;
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      localStorage.setItem('user', JSON.stringify(action.payload.userData));
    },
    setLoggedOut: (state) => {
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  }
});

export const { setLoggedIn, setLoggedOut } = userSlice.actions;

export default userSlice.reducer;