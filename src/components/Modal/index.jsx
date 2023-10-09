import { Modal as AntdModal } from 'antd';

const Modal = ({
  onClick = () => {},
  children,
  isModalOpen = false,
  handleOk = () => {},
  handleCancel = () => {},
  title = '',
  ...rest
}) => {
  return (
    <AntdModal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} {...rest}>
      {children}
    </AntdModal>
  );
};

export default Modal;
