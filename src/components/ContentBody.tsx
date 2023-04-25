import { App } from "antd";
import { ReactNode, useState } from "react";
import { ShareRelatedTransaction, ShareRelatedTransactionState } from "../features/share-related-transaction/shareRelatedTransactionSlice";
import ModalContent from "./ModalContent";
import TransactionTable from "./TransactionTable";
import AddNewTransaction from "./AddNewTransaction";

interface Props {
    children?: ReactNode;
    shareRelatedTransactionState: ShareRelatedTransactionState,
    deleteRecord: (record: ShareRelatedTransaction) => void;
    addRecord: (record: ShareRelatedTransaction) => void

}

const ContentBody = (props: Props) => {
    const { notification } = App.useApp();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [recordToDelete, setRecordToDelete] = useState<ShareRelatedTransaction | null>(null);

    const showModal = (): void => {
        setIsModalOpen(true);
    };
    const modalHandleOk = (): void => {
        if (!recordToDelete) {
            notification.warning({
                message: `Failed to delete`,
                description: "The share's transaction record not deleted",
                placement: 'bottomLeft',
            });
            return;
        }

        setIsModalOpen(false);
        props.deleteRecord(recordToDelete);
        setRecordToDelete(null);
    };

    const modalHandleCancel = (): void => {
        setIsModalOpen(false);
        setRecordToDelete(null);
    };

    const onClickDelete = (record: ShareRelatedTransaction) => {
        setRecordToDelete(record);
        showModal();
    };

    const addNewRecord = (newRecord: ShareRelatedTransaction) => {
        props.addRecord(newRecord);
    };
    return (
        <>
            <AddNewTransaction addNewRecord={addNewRecord} />
            <TransactionTable shareRelatedTransactionState={props.shareRelatedTransactionState} onClickDelete={onClickDelete} />
            <ModalContent handleOk={modalHandleOk} handleCancel={modalHandleCancel} isModalOpen={isModalOpen} />
        </>
    );
}

export default ContentBody;