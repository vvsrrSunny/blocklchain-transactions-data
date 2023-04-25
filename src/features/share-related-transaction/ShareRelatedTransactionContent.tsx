import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ShareRelatedTransaction, ShareRelatedTransactionState, removeState, selectShareRelatedTransactionState } from './shareRelatedTransactionSlice';
import TransactionsTable from '../../components/TransactionsTable';

const ShareRelatedTransactionContent = () => {
    const dispatch = useAppDispatch();
    const shareRelatedTransactionState: ShareRelatedTransactionState = useAppSelector(selectShareRelatedTransactionState);

    const deleteRecord = (record: ShareRelatedTransaction) => {
        dispatch(removeState(record));
    }
    return (
        <TransactionsTable deleteRecord={deleteRecord} shareRelatedTransactionState={shareRelatedTransactionState} />
    );
}

export default ShareRelatedTransactionContent;