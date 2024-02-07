import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    minPrice: '',
    maxPrice: '',
    color: [],
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.filter.color.splice(0, state.filter.color.length,  action.payload);
    },
    addPrice: (state, action) => {
      state.filter.minPrice = action.payload.minPrice.toString();
      state.filter.maxPrice = action.payload.maxPrice.toString();
    },
  },
});

export const { addColor, addPrice } = filterSlice.actions;

export default filterSlice.reducer;
