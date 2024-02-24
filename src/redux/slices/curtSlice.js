import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    curt: {
        products: [],
        allPrice: null,
    },
};

export const curtSlice = createSlice({
  name: 'curt',
  initialState,
  reducers: {
    addToCurt: (state, action) => {
      state.curt.products.push(action.payload);
    },
  },
});

export const { addToCurt } = curtSlice.actions;

export default curtSlice.reducer;