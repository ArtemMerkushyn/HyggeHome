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
        product => product.dataProduct.article !== action.payload.article
      );
      state.curt.products = updatedProducts;
    },
    changeAmount: (state, action) => {
      const { product, amount } = action.payload;
      const index = state.curt.products.findIndex(
        item => item.dataProduct.article === product.article
      );

      if (index !== -1) {
        state.curt.products[index] = { ...state.curt.products[index], amount: amount };
      }
    },
  },
});

export const { addToCurt, removeFromCart, changeAmount } = curtSlice.actions;

export default curtSlice.reducer;
