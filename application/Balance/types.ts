
export interface Transaction {
  type: string;
  amount: number;
  date: string;
}
 export interface fundState {
  amount: number;
  transactions: Transaction[];
}