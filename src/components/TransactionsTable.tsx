import { Button, Modal, Table } from "antd";
import { ReactNode, useState } from "react";
import { WarningOutlined } from '@ant-design/icons';
import { ShareRelatedTransaction, ShareRelatedTransactionState } from "../features/share-related-transaction/shareRelatedTransactionSlice";
import { ColumnsType } from "antd/es/table";

interface Props {
    children?: ReactNode;
    shareRelatedTransactionState: ShareRelatedTransactionState,
}

const TransactionsTable = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [recordToDelete, setRecordToDelete] = useState<ShareRelatedTransaction | null>();

    const showModal = (): void => {
        setIsModalOpen(true);
    };
    const handleOk = (): void => {
        setIsModalOpen(false);
        setRecordToDelete(null);
    };

    const handleCancel = (): void => {
        setIsModalOpen(false);
        setRecordToDelete(null);
    };

    const handleClick = (record: ShareRelatedTransaction) => {
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
                <Button onClick={() => handleClick(record)} className="p-0" type="link" danger>Delete</Button>
            ),
        },
    ];

    return (
        <>
            <Table className='overflow-x-auto' dataSource={props.shareRelatedTransactionState.results} columns={columns} />
            <Modal title={<div className="flex-row"><WarningOutlined className="text-red-600"/> Are you sure?</div>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
                <Button key="back" danger onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" danger onClick={handleOk}>
                    Ok
                </Button>
            ]}>
                <hr className="pb-2" />
                <p>Are you sure to delete this transaction</p>
            </Modal>
        </>
    );
}

export default TransactionsTable;