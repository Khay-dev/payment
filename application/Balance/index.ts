'use client';
import {  PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Transaction, fundState } from './types';


let storedValue = 0
let storedTransactions: Transaction[] = [];

if (typeof window !== "undefined") {
  storedValue = parseInt(localStorage.getItem("amount") ?? "0", 10);
  storedTransactions = JSON.parse(localStorage.getItem('transactions') ?? '[]');
}
 
const initialValue = storedValue;

const initialState: fundState = {
  amount: initialValue,
    transactions: storedTransactions
};

export const balanceSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {
    updateFunds: (state, action: PayloadAction<number>) => {
      state.amount += action.payload;
      const newTransaction: Transaction = {
        type: 'Fund',
        amount: action.payload,
        date: new Date().toLocaleDateString(),
      };
      state.transactions.push(newTransaction);

      if (typeof window !== "undefined") {
        localStorage.setItem("amount", state.amount.toString());
         localStorage.setItem('transactions', JSON.stringify(state.transactions));
      }
    },
    decreaseFunds: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload;
      const newTransaction: Transaction = {
        type: 'Transfer',
        amount: action.payload,
                date: new Date().toLocaleDateString(),

      };
      state.transactions.push(newTransaction);
      if (typeof window !== "undefined") {
        localStorage.setItem("amount", state.amount.toString());
         localStorage.setItem('transactions', JSON.stringify(state.transactions));
      }
    },  
  },
});

export const { updateFunds, decreaseFunds } = balanceSlice.actions
export default balanceSlice.reducer;