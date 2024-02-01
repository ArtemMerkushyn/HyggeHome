import { createSlice } from '@reduxjs/toolkit';

export const candlesSlice = createSlice({
  name: 'candles',
  initialState: {
    data: [],
    isActive: false,
  },
  reducers: {
    setCandles: (state, action) => {
      state.data = action.payload;
      state.isActive = true;
    },
    setIsActive: (state) => {
      state.isActive = false;
    }
  },
});

export const { setCandles, setIsActive } = candlesSlice.actions;

export default candlesSlice.reducer;
