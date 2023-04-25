import shareRelatedTransactionReducer, {
    ShareRelatedTransaction, ShareRelatedTransactionState,

    addSharesTransactionState, removeSharesTransactionState
} from './shareRelatedTransactionSlice';

describe('dnd reducer', () => {
    const initialState: ShareRelatedTransactionState = {
        autoIncrementForId: 2,
        results: [
            {
                id: 1,
                emailAddress: "bunny@gmail.com",
                shareHolderName: "Bunny John",
                type: "buy",
                sharesCount: 1000,
                transactionTime: "1",
            },
        ]
    };

    it('should handle initial state', () => {
        expect(shareRelatedTransactionReducer({
            autoIncrementForId: 2,
            results: [
                {
                    id: 1,
                    emailAddress: "bunny@gmail.com",
                    shareHolderName: "Bunny John",
                    type: "buy",
                    sharesCount: 1000,
                    transactionTime: "1",
                },
            ]
        }, { type: 'unknown' })).toEqual({
            autoIncrementForId: 2,
            results: [
                {
                    id: 1,
                    emailAddress: "bunny@gmail.com",
                    shareHolderName: "Bunny John",
                    type: "buy",
                    sharesCount: 1000,
                    transactionTime: "1",
                }
            ]
        });
    });

    it('should add share\'s related transaction', () => {
        const newResult: ShareRelatedTransaction = {
            id: null,
            emailAddress: "sunny@gmail.com",
            shareHolderName: "Sunny Raj",
            type: "buy",
            sharesCount: 1000,
            transactionTime: "1",
        };
        const actual = shareRelatedTransactionReducer(initialState, addSharesTransactionState(newResult));
        expect(actual.results[1].id).toEqual(2);
        expect(actual.results.length).toEqual(2);
        expect(actual.results[1].shareHolderName).toEqual('Sunny Raj');
        expect(actual.autoIncrementForId).toEqual(3);
    });

    it('should remove an item from share\'s related transactions state', () => {
        const ResultToRemove: ShareRelatedTransaction = {
            id: 6,
            emailAddress: "ravi@gmail.com",
            shareHolderName: "Rajamouli",
            type: "sell",
            sharesCount: 3344,
            transactionTime: "1",
        };

        const actual = shareRelatedTransactionReducer({
            autoIncrementForId: 7,
            results: [
                {
                    id: 6,
                    emailAddress: "ravi@gmail.com",
                    shareHolderName: "Rajamouli",
                    type: "sell",
                    sharesCount: 3344,
                    transactionTime: "1",
                },
            ]
        }, removeSharesTransactionState(ResultToRemove));


        expect(actual.results.length).toEqual(0);
    });
});
