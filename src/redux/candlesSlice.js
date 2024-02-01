import { createSlice } from '@reduxjs/toolkit';

export const candlesSlice = createSlice({
  name: 'candles',
  initialState: {
    data: [],
  },
  reducers: {
    setCandles: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCandles } = candlesSlice.actions;

export default candlesSlice.reducer;
