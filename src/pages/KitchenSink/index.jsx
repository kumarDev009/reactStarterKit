import { Button, Card, Space } from "antd";
import { useState } from "react";
import { CustomButton } from "../../Components/FormFields/CustomButton";
import { InputField } from "../../Components/FormFields/CustomInputfield";
import { CustomModal } from "../../Components/FormFields/CustomModal";
import { CustomTitle } from "../../Components/FormFields/CustomTitle";

const KitchenSink = () => {

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleOk = () => {
        setOpenModal(false)
    }

    const handleCancel = () => {
        setOpenModal(false)
    }

    return (
        <>
            <Space direction='vertical' size='middle' className="d-flex">
                <Card title='CustomButton' size="small" className="border border-dark">
                    <CustomButton className="px-0" type="link" buttonText={"This is used for link!"} />
                    <CustomButton className="px-0" buttonText={' This is used for button link!'} htmlType="button" type="link" />
                    <CustomButton className={'w-100'} buttonText={'Button'} htmlType="submit" />
                </Card>
                <Card title='CustomInputFiled' size="middle" className="border border-dark">
                    <InputField
                        name="email"
                        label="Input Field"
                        rules={[{ required: true, message: 'Please Enter Input Field' }]}
                        placeholder="Input Field"
                        className={'mb-0'}
                    />
                </Card>
                <Card title='CustomTitle' size="middle" className="border border-dark">
                    <CustomTitle title_text="Custom Title" text_level={3} />
                </Card>
                <Card title='CustomModal' size="middle" className="border border-dark">
                    <Button type="primary" onClick={handleOpenModal}>
                        Open Modal
                    </Button>
                    <CustomModal
                        title="Sample Modal"
                        isModalOpen={openModal}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                    >
                        <p>Modal 1</p>
                        <p>Modal 2</p>
                        <p>Modal 3</p>
                    </CustomModal>
                </Card>
            </Space>
        </>
    );
};

export default KitchenSink
