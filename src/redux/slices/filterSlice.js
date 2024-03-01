import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    minPrice: '',
    maxPrice: '',
    color: [],
  },
  sortValue: {
    field: 'popular',
    dir: 'desc',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.filter.color.splice(0, state.filter.color.length, action.payload);
    },
    addPrice: (state, action) => {
      state.filter.minPrice = action.payload.minPrice.toString();
      state.filter.maxPrice = action.payload.maxPrice.toString();
    },
    addSortValue: (state, action) => {
      state.sortValue = action.payload;
    },
  },
});

export const { addColor, addPrice, addSortValue } = filterSlice.actions;

export default filterSlice.reducer;
