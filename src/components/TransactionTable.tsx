import { ReactNode } from "react";
import { ShareRelatedTransaction, ShareRelatedTransactionState } from "../features/share-related-transaction/shareRelatedTransactionSlice";
import { Button, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import moment from "moment";


interface Props {
    children?: ReactNode;
    shareRelatedTransactionState: ShareRelatedTransactionState,
    onClickDelete: (record: ShareRelatedTransaction) => void
}

const TransactionTable = (props: Props) => {
    const columns: ColumnsType<ShareRelatedTransaction> = [
        {
            title: 'Email',
            dataIndex: 'emailAddress',
            key: 'emailAddress',
            render: (text: string) => <Button className="p-0" type="link">{text}</Button>,
        },
        {
            title: 'Share Holder',
            dataIndex: 'shareHolderName',
            key: 'shareHolderName',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (_, record) => (
                <Tag color={record.type === "buy" ? "green" : "blue"} key={record.key}>
                    {record.type}
                </Tag>
            ),

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
                const timeA = moment(a.transactionTime, 'DD-MM-YYYY h:mm A');
                const timeB = moment(b.transactionTime, 'DD-MM-YYYY h:mm A');
                return timeA.isBefore(timeB) ? -1 : timeA.isAfter(timeB) ? 1 : 0;
            },
            render: (_, record) => (
                moment(record.transactionTime).format('LLL')
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button onClick={() => props.onClickDelete(record)} className="p-0" type="link" danger>Delete</Button>
            ),
        },
    ];

    return (
        <Table className='overflow-x-auto' dataSource={props.shareRelatedTransactionState.results} columns={columns} />
    );
}

export default TransactionTable