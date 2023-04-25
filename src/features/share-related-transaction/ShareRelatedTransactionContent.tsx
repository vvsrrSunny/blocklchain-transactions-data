import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ShareRelatedTransaction, ShareRelatedTransactionState, addSharesTransactionState, removeSharesTransactionState, selectShareRelatedTransactionState } from './shareRelatedTransactionSlice';
import ContentBody from '../../components/ContentBody';
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

    const addRecord = (record: ShareRelatedTransaction) => {
        dispatch(addSharesTransactionState(record));
        notification.success({
            message: `New Record add`,
            description: "New share's transaction record added successfully",
            placement: 'bottomLeft',
        });
    }
    return (
        <ContentBody addRecord={addRecord} deleteRecord={deleteRecord} shareRelatedTransactionState={shareRelatedTransactionState} />
    );
}

export default ShareRelatedTransactionContent;