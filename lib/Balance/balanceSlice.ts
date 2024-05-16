'use client';
import {  PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface fundState {
  amount: number;
}

let storedValue = 0;
if (typeof window !== "undefined") {
  storedValue = parseInt(localStorage.getItem("amount") || "0", 10);
}
const initialValue = storedValue;

const initialState: fundState = {
  amount: initialValue,
};

export const fundSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {
    updateFunds: (state, action: PayloadAction<number>) => {
      state.amount += action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("amount", state.amount.toString());
      }
    },
    decreaseFunds: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("amount", state.amount.toString());
      }
    },
    resetAmount: (state) => {
      state.amount = 0
      if (typeof window !== "undefined") {
        localStorage.setItem("amount", "0");
      }
   
    }    
  },
});

export const { updateFunds, decreaseFunds, resetAmount } = fundSlice.actions
export default fundSlice.reducer;