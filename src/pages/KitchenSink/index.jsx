import { useState } from 'react';
import { Card, Form, Space } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import Button from 'components/Button';
import Input from 'components/Input';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import Editor from 'components/Editor';
import Title from 'components/Title';
import ErrorBoundary from 'components/ErrorBoundary';
import OpenNotification from 'components/Notification';
import ProgressBar from 'components/ProgressBar';

const KitchenSink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorBoudary, setErrorBoudary] = useState([]);
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);

  const notificationTypes = ['success', 'error', 'info', 'warning'];

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

  const onFinish = values => {
    console.log('values', values);
  };

  const handleThrowError = () => {
    setErrorBoudary(null);
  };

  const handleNotification = () => {
    const currentType = notificationTypes[currentTypeIndex];
    OpenNotification({
      type: currentType,
      message: `This is a ${currentType} notification`,
      description: `Details of the ${currentType} notification go here.`
    });
    setCurrentTypeIndex(prev => (prev + 1) % notificationTypes.length);
  };

  return (
    <Space direction="vertical" size="middle" className="d-flex">
      <Card title="CustomButton" size="small" className="border border-dark">
        <Loader loading={loading} message="Saving...">
          <Button className="px-0" type="link">
            This is used for link!
          </Button>
          <Button className="px-0" type="link">
            This is used for button link!
          </Button>
          <Button className={'w-100'} htmlType="submit">
            Button
          </Button>
          <Button
            icon={<SaveOutlined className="d-block" />}
            loading={loading}
            title="Save User Info"
            onClick={handleSave}
          >
            {loading ? 'Saving' : 'Save'}
          </Button>
        </Loader>
      </Card>
      <Card title="CustomInputFiled" size="middle" className="border border-dark">
        <Input
          name="email"
          label="Input Field"
          rules={[{ required: true, message: 'Please Enter Input Field' }]}
          placeholder="Input Field"
          className={'mb-0'}
        />
        <ProgressBar />
      </Card>
      <Card title="CustomTitle" size="middle" className="border border-dark">
        <Title level={3}>Custom Title</Title>
      </Card>
      <Card title="CustomModal" size="middle" className="border border-dark">
        <Button type="primary" onClick={handleOpenModal}>
          Open Modal
        </Button>
        <Modal title="Sample Modal" isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}>
          <p>Modal 1</p>
          <p>Modal 2</p>
          <p>Modal 3</p>
        </Modal>
      </Card>
      <Card title="CustomRichEditor" size="middle" className="border border-dark">
        <Form name="sample_form" onFinish={onFinish}>
          <Editor name="description" />
          <Button htmlType="submit" className="mt-5">
            Submit
          </Button>
        </Form>
      </Card>
      <Card title="ErrorBoundary" size="middle" className="border border-dark">
        <ErrorBoundary>
          <Button onClick={handleThrowError}>Throw Error</Button>
          {errorBoudary[0]}
        </ErrorBoundary>
      </Card>
      <Card title="Notification" size="middle" className="border border-dark">
        <Button onClick={handleNotification} htmlType="button">
          {`Show ${notificationTypes[currentTypeIndex]} Notification`}
        </Button>
      </Card>
    </Space>
  );
};

export default KitchenSink;
