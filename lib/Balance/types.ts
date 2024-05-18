
export interface Transaction {
  type: string;
  amount: number;
}
 export interface fundState {
  amount: number;
  transactions: Transaction[];
}