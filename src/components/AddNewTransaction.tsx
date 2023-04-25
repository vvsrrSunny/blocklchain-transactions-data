import { Button, Modal } from "antd";
import { ReactNode, useState } from "react";


interface Props {
    children?: ReactNode;
}

const AddNewTransaction = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = (): void => {
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="pb-5 flex justify-end">
                <Button type="primary" onClick={showModal} className="bg-amber-500">Add Transaction</Button>
            </div>

            <Modal open={isModalOpen} title="title here"  keyboard={true}  onOk={()=>{}} onCancel={()=>{}}
                maskClosable={true}>
                <hr></hr>
                data herre
            </Modal>
        </>
    );
}

export default AddNewTransaction;