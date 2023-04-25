import { App, Button, Table } from "antd";
import { ReactNode, useState } from "react";
import { ShareRelatedTransaction, ShareRelatedTransactionState } from "../features/share-related-transaction/shareRelatedTransactionSlice";
import { ColumnsType } from "antd/es/table";
import ModalContent from "./ModalContent";
import moment from 'moment';

interface Props {
    children?: ReactNode;
    shareRelatedTransactionState: ShareRelatedTransactionState,
    deleteRecord: (record: ShareRelatedTransaction) => void
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
            sorter: (a: ShareRelatedTransaction, b: ShareRelatedTransaction) => {
                const timeA = moment(a.transactionTime, 'HH:mm:ss');
                const timeB = moment(b.transactionTime, 'HH:mm:ss');
                return timeA.isBefore(timeB) ? -1 : timeA.isAfter(timeB) ? 1 : 0;
            },
            render: (_, record) => (
                //$$ formate the time in a nice way
                record.transactionTime
            ),
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
            <div className="pb-5 flex justify-end">
                <Button type="primary" className="bg-amber-500">Add Transaction</Button>
            </div>
            
            <Table className='overflow-x-auto' dataSource={props.shareRelatedTransactionState.results} columns={columns} />
            <ModalContent handleOk={modalHandleOk} handleCancel={modalHandleCancel} isModalOpen={isModalOpen} />
        </>
    );
}

export default ContentBody;