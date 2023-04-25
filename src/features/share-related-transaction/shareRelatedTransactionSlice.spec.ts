import shareRelatedTransactionReducer, {
    ShareRelatedTransaction, ShareRelatedTransactionState,

    addState, removeSharesTransactionState
} from './shareRelatedTransactionSlice';

describe('dnd reducer', () => {
    const initialState: ShareRelatedTransactionState = {
        results: [
            {
                id: 1,
                emailAddress: "bunny@gmail.com",
                shareHolderName: "Bunny John",
                Type: "buy",
                sharesCount: 1000,
                transactionTime: 1,
            },
        ]
    };

    it('should handle initial state', () => {
        expect(shareRelatedTransactionReducer({
            results: [
                {
                    id: 1,
                    emailAddress: "bunny@gmail.com",
                    shareHolderName: "Bunny John",
                    Type: "buy",
                    sharesCount: 1000,
                    transactionTime: 1,
                },
            ]
        }, { type: 'unknown' })).toEqual({
            results: [
                {
                    id: 1,
                    emailAddress: "bunny@gmail.com",
                    shareHolderName: "Bunny John",
                    Type: "buy",
                    sharesCount: 1000,
                    transactionTime: 1,
                }
            ]
        });
    });

    it('should add share\'s related transaction', () => {
        const newResult: ShareRelatedTransaction = {
            id: 4,
            emailAddress: "sunny@gmail.com",
            shareHolderName: "Sunny Raj",
            Type: "buy",
            sharesCount: 1000,
            transactionTime: 1,
        };
        const actual = shareRelatedTransactionReducer(initialState, addState(newResult));
        expect(actual.results[1].id).toEqual(4);
        expect(actual.results.length).toEqual(2);
        expect(actual.results[1].shareHolderName).toEqual('Sunny Raj');
    });

    it('should remove an item from share\'s related transactions state', () => {
        const ResultToRemove: ShareRelatedTransaction = {
            id: 6,
            emailAddress: "ravi@gmail.com",
            shareHolderName: "Rajamouli",
            Type: "sell",
            sharesCount: 3344,
            transactionTime: 1,
        };

        const actual = shareRelatedTransactionReducer({
            results: [
                {
                    id: 6,
                    emailAddress: "ravi@gmail.com",
                    shareHolderName: "Rajamouli",
                    Type: "sell",
                    sharesCount: 3344,
                    transactionTime: 1,
                },
            ]
        }, removeSharesTransactionState(ResultToRemove));


        expect(actual.results.length).toEqual(0);
    });
});
