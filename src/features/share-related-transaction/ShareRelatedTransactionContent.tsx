import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ShareRelatedTransaction, ShareRelatedTransactionState, removeSharesTransactionState, selectShareRelatedTransactionState } from './shareRelatedTransactionSlice';
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
    return (
        <ContentBody deleteRecord={deleteRecord} shareRelatedTransactionState={shareRelatedTransactionState} />
    );
}

export default ShareRelatedTransactionContent;