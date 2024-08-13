import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchInputValue: '',
    data: [],
    isActive: false,
    error: null,
    isLoading: false,
  },
  reducers: {
    setSearch: (state, action) => {
      state.data = action.payload;
      state.isActive = true;
      state.isLoading = false;
      state.error = null;
    },
    setSearchInputValue: (state, action) => {
      state.searchInputValue = action.payload;
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
      state.error = null;
    },
  },
});

export const { setSearch, setSearchInputValue, setIsActive, setError, setIsLoading } =
  searchSlice.actions;

export default searchSlice.reducer;
