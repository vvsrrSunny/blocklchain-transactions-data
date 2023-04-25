import { useAppSelector } from '../../app/hooks';
import { ShareRelatedTransactionState, selectShareRelatedTransactionState } from './shareRelatedTransactionSlice';
import TransactionsTable from '../../components/TransactionsTable';

const ShareRelatedTransaction = () => {
    const shareRelatedTransactionState: ShareRelatedTransactionState = useAppSelector(selectShareRelatedTransactionState);

    return (
        <TransactionsTable shareRelatedTransactionState={shareRelatedTransactionState} />
    );
}

export default ShareRelatedTransaction;