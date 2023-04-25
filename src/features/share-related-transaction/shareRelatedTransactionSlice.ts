import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type transactionType = "buy" | "sell";

export interface ShareRelatedTransaction {
    key?: number
    id: number | null,
    emailAddress: string,
    shareHolderName: string,
    type: transactionType,
    sharesCount: number,
    transactionTime: string,
}

export type ShareRelatedTransactionState = { autoIncrementForId: number, results: Array<ShareRelatedTransaction> };

const initialState: ShareRelatedTransactionState = {
    autoIncrementForId: 7,
    results: [
        {
            key: 1,
            id: 1,
            emailAddress: "bunny@gmail.com",
            shareHolderName: "Bunny John",
            type: "buy",
            sharesCount: 1000,
            transactionTime: "07-04-2023 11:25 PM",
        },
        {
            key: 2,
            id: 2,
            emailAddress: "ben@gmail.com",
            shareHolderName: "Benjamin Hartnett",
            type: "buy",
            sharesCount: 3454,
            transactionTime: "08-04-2023 11:25 PM",
        },
        {
            key: 3,
            id: 3,
            emailAddress: "tania@gmail.com",
            shareHolderName: "Tania Admans",
            type: "sell",
            sharesCount: 2454,
            transactionTime: "07-01-2023 11:25 PM",
        },
        {
            key: 4,
            id: 4,
            emailAddress: "sunny@gmail.com",
            shareHolderName: "Sunny Varanasi",
            type: "sell",
            sharesCount: 1375,
            transactionTime: "07-02-2023 11:25 PM",
        },
        {
            key: 5,
            id: 5,
            emailAddress: "raj@gmail.com",
            shareHolderName: "Raj Chandra",
            type: "buy",
            sharesCount: 3333,
            transactionTime: "07-04-2017 11:25 PM",
        },
        {
            key: 6,
            id: 6,
            emailAddress: "ravi@gmail.com",
            shareHolderName: "Rajamouli",
            type: "sell",
            sharesCount: 3344,
            transactionTime: "07-02-2022 10:25 AM",
        },
    ]
};

export const shareRelatedTransactionSlice = createSlice({
    name: 'shareRelatedTransaction',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addSharesTransactionState: (state, action: PayloadAction<ShareRelatedTransaction>) => {
            action.payload.key = state.autoIncrementForId;
            action.payload.id = state.autoIncrementForId;
            state.autoIncrementForId++;
            state.results.push(action.payload);
        },
        removeSharesTransactionState: (state, action: PayloadAction<ShareRelatedTransaction>) => {
            state.results = state.results.filter((result: ShareRelatedTransaction) => result.id !== action.payload.id);
        },
    },
});

// provide a way to access the store using app selector.
export const selectShareRelatedTransactionState = (state: RootState) => state.shareRelatedTransaction;

export const { addSharesTransactionState, removeSharesTransactionState } = shareRelatedTransactionSlice.actions;

export default shareRelatedTransactionSlice.reducer;
