import { Button, DatePicker, Drawer, Form, FormInstance, Input, InputNumber, Modal, Radio } from "antd";
import moment from "moment";
import React, { ReactNode, useState } from "react";
import { ShareRelatedTransaction } from "../features/share-related-transaction/shareRelatedTransactionSlice";

interface Props {
    children?: ReactNode;
    addNewRecord: (newRecord: ShareRelatedTransaction) => void;
}

const AddNewTransaction = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [form] = Form.useForm();
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        const fieldsData = form.getFieldsValue();
        const hasEmptyFields = Object.keys(fieldsData).every((field: string) => (fieldsData[field] === undefined || fieldsData[field] === ""));
        if (hasEmptyFields) {
            setOpen(false);
            form.resetFields();
            return;
        }

        // open modal here
        setIsModalOpen(true);
    };

    const onFinish = (values: any) => {
        // this time is Perth current time, may create time differences if tried at different place. 
        values.transactionTime = moment(values.transactionTime).format('DD-MM-YYYY h:mm A');
        const newRecord: ShareRelatedTransaction = {
            id: null,
            emailAddress: values.emailAddress,
            shareHolderName: values.shareHolderName,
            type: values.type,
            sharesCount: values.sharesCount,
            transactionTime: values.transactionTime,
        }

        props.addNewRecord(newRecord);

        form.resetFields();
        onClose();
    };

    const closeDrawerConfirm = () => {
        setOpen(false);
        form.resetFields();
        setIsModalOpen(false);
    }

    return (
        <>
            <div className="pb-6 flex justify-end">
                <Button type="primary" onClick={showDrawer} className="bg-amber-500">Add Transaction</Button>
            </div>

            <Drawer title="Add Transaction" placement="right" onClose={onClose} open={open}>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={() => {}}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="Email Address"
                        name="emailAddress"
                        rules={[{ required: true, type: 'email', message: 'Please provide the the email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Shareholder's Name"
                        name="shareHolderName"
                        rules={[
                            { required: true, message: 'Please provide the Share holder\'s name!' },
                            {
                                pattern: /^[a-zA-Z\s]*$/,
                                message: 'Special characters are not allowed!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Please select the type!' }]}>
                        <Radio.Group>
                            <Radio value="buy">Buy</Radio>
                            <Radio value="sell">Sell</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="Number of Shares"
                        name="sharesCount"
                        rules={[{ required: true, type: 'number', message: 'Please provide the number of shares' }]}
                    >
                        <InputNumber style={{ width: '50%' }} />
                    </Form.Item>
                    <Form.Item
                        label="Transaction Time"
                        name="transactionTime"
                        rules={[
                            {
                                required: true,
                                message: 'Please select a Date',
                            },
                        ]}
                    >
                        <DatePicker showTime={{ format: 'h:mm A' }} style={{ width: '50%' }} format="DD-MM-YYYY h:mm A" />
                    </Form.Item>

                    <hr className="pb-6"></hr>
                    <Form.Item>
                        <Button type="primary" className="bg-amber-500" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>

            <Modal title="Close the Slider" open={isModalOpen} onOk={closeDrawerConfirm} onCancel={() => setIsModalOpen(false)} footer={[
                <Button key="back" danger onClick={() => setIsModalOpen(false)}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" danger onClick={closeDrawerConfirm}>
                    Ok
                </Button>
            ]}>
                <hr className="pb-2" />
                <p>You will lose the data you filled to add a new transaction</p>
            </Modal>
        </>
    );
}

export default AddNewTransaction;