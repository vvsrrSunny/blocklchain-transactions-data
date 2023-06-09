import { WarningOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleOk: () => void;
}

const ModalContent = ({ children, ...props }: Props) => {
    return (
        <Modal title={<div className="flex-row"><WarningOutlined style={{color: '#ff4D4f'}} /> Delete Transaction</div>} open={props.isModalOpen} onOk={props.handleOk} onCancel={props.handleCancel} footer={[
            <Button key="back" danger onClick={props.handleCancel}>
                Cancel
            </Button>,
            <Button key="submit" type="primary" danger onClick={props.handleOk}>
                Confirm
            </Button>
        ]}>
            <hr className="pb-2" />
            <p>Are you sure to delete this transaction</p>
        </Modal>
    );
}

export default ModalContent;