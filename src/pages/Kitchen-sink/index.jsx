import { useState } from 'react';
import { Button, Card, Space } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import { CustomButton } from '../../Components/FormFields/CustomButton';
import { InputField } from '../../Components/FormFields/CustomInputfield';
import { CustomModal } from '../../Components/FormFields/CustomModal';
import { CustomTitle } from '../../Components/FormFields/CustomTitle';
import { Loader } from '../../Components/FormFields/CustomLoader';

const KitchenSink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(prev => !prev);
    }, 3000);
  };

  return (
    <>
      <Space direction="vertical" size="middle" className="d-flex">
        <Card title="CustomButton" size="small" className="border border-dark">
          <Loader loading={loading} message="Saving...">
            <CustomButton className="px-0" type="link" buttonText={'This is used for link!'} />
            <CustomButton className="px-0" buttonText={' This is used for button link!'} type="link" />
            <CustomButton className={'w-100'} buttonText={'Button'} htmlType="submit" />
            <CustomButton
              buttonText={loading ? 'Saving' : 'Save'}
              icon={<SaveOutlined className="d-block" />}
              loading={loading}
              title="Save User Info"
              onClick={handleSave}
            />
          </Loader>
        </Card>
        <Card title="CustomInputFiled" size="middle" className="border border-dark">
          <InputField
            name="email"
            label="Input Field"
            rules={[{ required: true, message: 'Please Enter Input Field' }]}
            placeholder="Input Field"
            className={'mb-0'}
          />
        </Card>
        <Card title="CustomTitle" size="middle" className="border border-dark">
          <CustomTitle title_text="Custom Title" text_level={3} />
        </Card>
        <Card title="CustomModal" size="middle" className="border border-dark">
          <Button type="primary" onClick={handleOpenModal}>
            Open Modal
          </Button>
          <CustomModal title="Sample Modal" isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}>
            <p>Modal 1</p>
            <p>Modal 2</p>
            <p>Modal 3</p>
          </CustomModal>
        </Card>
      </Space>
    </>
  );
};

export default KitchenSink;
