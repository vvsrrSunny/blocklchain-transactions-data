import { Button, Table } from "antd";
import { ReactNode, useState } from "react";
import { ShareRelatedTransaction, ShareRelatedTransactionState } from "../features/share-related-transaction/shareRelatedTransactionSlice";
import { ColumnsType } from "antd/es/table";
import ModalContent from "./ModalContent";

interface Props {
    children?: ReactNode;
    shareRelatedTransactionState: ShareRelatedTransactionState,
    deleteRecord: (record: ShareRelatedTransaction) => void
}

const TransactionsTable = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [recordToDelete, setRecordToDelete] = useState<ShareRelatedTransaction | null>(null);

    const showModal = (): void => {
        setIsModalOpen(true);
    };
    const modalHandleOk = (): void => {
        if (!recordToDelete) {
            //$$ set the notification to say failed to delete the transaction
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
        console.log(record);
        setRecordToDelete(record);
        showModal();
    };

    const columns: ColumnsType<ShareRelatedTransaction> = [
        {
            title: 'Email',
            dataIndex: 'emailAddress',
            key: 'emailAddress',
        },
        {
            title: 'Share Holder',
            dataIndex: 'shareHolderName',
            key: 'shareHolderName',
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'Type',
        },
        {
            title: 'Number of Shares',
            dataIndex: 'sharesCount',
            key: 'sharesCount',
        },
        {
            title: 'Transaction Time',
            dataIndex: 'transactionTime',
            key: 'transactionTime',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button onClick={() => onClickDelete(record)} className="p-0" type="link" danger>Delete</Button>
            ),
        },
    ];

    return (
        <>
            <Table className='overflow-x-auto' dataSource={props.shareRelatedTransactionState.results} columns={columns} />
            <ModalContent handleOk={modalHandleOk} handleCancel={modalHandleCancel} isModalOpen={isModalOpen} />
        </>
    );
}

export default TransactionsTable;