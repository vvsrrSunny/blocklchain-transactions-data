import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type transactionType = "buy" | "sell";

export interface shareRelatedTransaction {
    id: number,
    emailAddress: string,
    shareHolderName: string,
    Type: transactionType,
    sharesCount: number,
    transactionTime: number,
}

const initialState: { results: Array<shareRelatedTransaction> } = {
    results: [
        {
            id: 1,
            emailAddress: "bunny@gmail.com",
            shareHolderName: "Bunny John",
            Type: "buy",
            sharesCount: 1000,
            transactionTime: 1,
        },
        {
            id: 2,
            emailAddress: "ben@gmail.com",
            shareHolderName: "Benjamin Hartnett",
            Type: "buy",
            sharesCount: 3454,
            transactionTime: 1,
        },
        {
            id: 3,
            emailAddress: "tania@gmail.com",
            shareHolderName: "Tania Admans",
            Type: "sell",
            sharesCount: 2454,
            transactionTime: 1,
        },
        {
            id: 4,
            emailAddress: "sunny@gmail.com",
            shareHolderName: "Sunny Varanasi",
            Type: "sell",
            sharesCount: 1375,
            transactionTime: 1,
        },
        {
            id: 5,
            emailAddress: "raj@gmail.com",
            shareHolderName: "Raj Chandra",
            Type: "buy",
            sharesCount: 3333,
            transactionTime: 1,
        },
        {
            id: 6,
            emailAddress: "ravi@gmail.com",
            shareHolderName: "Rajamouli",
            Type: "sell",
            sharesCount: 3344,
            transactionTime: 1,
        },
    ]
};

export const shareRelatedTransactionSlice = createSlice({
    name: 'shareRelatedTransaction',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addState: (state, action: PayloadAction<shareRelatedTransaction>) => {
            state.results.push(action.payload);
        },
        removeState: (state, action: PayloadAction<shareRelatedTransaction>) => {
            state.results = state.results.filter((result) => result.id !== action.payload.id);
        },
    },
});

// provide a way to access the store using app selector.
export const selectShareRelatedTransactionState = (state: RootState) => state.shareRelatedTransaction;

export const { addState, removeState } = shareRelatedTransactionSlice.actions;

export default shareRelatedTransactionSlice.reducer;