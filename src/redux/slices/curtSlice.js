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
    removeFromCart: (state, action) => {
      const updatedProducts = state.curt.products.filter(
        product => product.dataProduct._id !== action.payload._id
      );
      state.curt.products = updatedProducts;
    }
  },
});

export const { addToCurt, removeFromCart } = curtSlice.actions;

export default curtSlice.reducer;