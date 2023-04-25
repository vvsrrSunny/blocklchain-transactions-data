import { Button, DatePicker, Drawer, Form, FormInstance, Input, InputNumber, Modal, Radio, TimePicker } from "antd";
import moment from "moment";
import React, { ReactNode, useState } from "react";


interface Props {
    children?: ReactNode;
}

const AddNewTransaction = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const formRef = React.useRef<FormInstance>(null);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        formRef.current?.resetFields();
    };

    const onFinish = (values: any) => {
        console.log(moment(values.transactionTime).format('DD-MM-YYYY h:mm A'));
        values.transactionTime = moment(values.transactionTime).format('DD-MM-YYYY h:mm A');
        console.log('Success:', values);

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="pb-5 flex justify-end">
                <Button type="primary" onClick={showDrawer} className="bg-amber-500">Add Transaction</Button>
            </div>

            <Drawer title="Add transaction" placement="right" onClose={onClose} open={open}>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    ref={formRef}
                >
                    <Form.Item
                        label="Email Address"
                        name="emailAddress"
                        rules={[{ required: true, type: 'email', message: 'Please provide the the email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Share Holder Name"
                        name="shareHolderName"
                        rules={[{ required: true, message: 'Please provide the Share holder\'s name!' }]}
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
                        label="Number of shares"
                        name="sharesCount"
                        rules={[{ required: true, type: 'number', message: 'Please provide the number of shares' }]}
                    >
                        <InputNumber style={{ width: '50%' }} />
                    </Form.Item>
                    <Form.Item
                        label="Transaction time"
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
        </>
    );
}

export default AddNewTransaction;