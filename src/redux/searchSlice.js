import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [],
    isActive: false,
  },
  reducers: {
    setSearch: (state, action) => {
      state.data = action.payload;
      state.isActive = true;
    },
    setIsActive: state => {
      state.isActive = false;
    },
  },
});

export const { setSearch, setIsActive } = searchSlice.actions;

export default searchSlice.reducer;
