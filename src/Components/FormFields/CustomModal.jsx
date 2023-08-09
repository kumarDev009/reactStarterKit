import { Modal } from 'antd'


export const CustomModal = ({

    onClick = () => { },
    children,
    isModalOpen = false,
    handleOk = () => { },
    handleCancel = () => { },
    title = "",
    ...rest
}) => {
    return (
        <div>
            <Modal
                title={title}
                open={true}
                onOk={handleOk}
                onCancel={handleCancel}
                {...rest}
            >
                {children}
            </Modal>
        </div>
    )
}
