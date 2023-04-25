import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ShareRelatedTransaction, ShareRelatedTransactionState, removeSharesTransactionState, selectShareRelatedTransactionState } from './shareRelatedTransactionSlice';
import TransactionsTable from '../../components/TransactionsTable';
import { App } from 'antd';

const ShareRelatedTransactionContent = () => {
    const { notification } = App.useApp();
    const dispatch = useAppDispatch();
    const shareRelatedTransactionState: ShareRelatedTransactionState = useAppSelector(selectShareRelatedTransactionState);

    const deleteRecord = (record: ShareRelatedTransaction) => {
        dispatch(removeSharesTransactionState(record));
        notification.success({
            message: `Record deleted`,
            description: "The share's transaction record is deleted",
            placement: 'bottomLeft',
        });
    }
    return (
        <TransactionsTable deleteRecord={deleteRecord} shareRelatedTransactionState={shareRelatedTransactionState} />
    );
}

export default ShareRelatedTransactionContent;