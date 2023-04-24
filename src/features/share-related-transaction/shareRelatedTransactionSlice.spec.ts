import shareRelatedTransactionReducer, {
    ShareRelatedTransaction,
    addState, removeState
} from './shareRelatedTransactionSlice';

describe('dnd reducer', () => {
    const initialState: Array<ShareRelatedTransaction> = [
        {
            id: 1,
            emailAddress: "bunny@gmail.com",
            shareHolderName: "Bunny John",
            Type: "buy",
            sharesCount: 1000,
            transactionTime: 1,
        },
    ];

    it('should handle initial state', () => {
        expect(shareRelatedTransactionReducer([
            {
                id: 1,
                emailAddress: "bunny@gmail.com",
                shareHolderName: "Bunny John",
                Type: "buy",
                sharesCount: 1000,
                transactionTime: 1,
            },
        ], { type: 'unknown' })).toEqual([
            {
                id: 1,
                emailAddress: "bunny@gmail.com",
                shareHolderName: "Bunny John",
                Type: "buy",
                sharesCount: 1000,
                transactionTime: 1,
            }
        ]);
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
        expect(actual[1].id).toEqual(4);
        expect(actual.length).toEqual(2);
        expect(actual[1].shareHolderName).toEqual('Sunny Raj');
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

        const actual = shareRelatedTransactionReducer([
            {
                id: 1,
                emailAddress: "bunny@gmail.com",
                shareHolderName: "Bunny John",
                Type: "buy",
                sharesCount: 1000,
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
        ], removeState(ResultToRemove));


        expect(actual.length).toEqual(2);
        expect(actual[1].id).toEqual(6);
    });
});
