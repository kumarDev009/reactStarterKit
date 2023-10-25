import { useState } from 'react';
import { Form, Space } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';
import Input from 'components/Input';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import Editor from 'components/Editor';
import Title from 'components/Title';
import ErrorBoundary from 'components/ErrorBoundary';
import Card from 'components/Card';
import Switch from 'components/Switch';
import TextArea from 'components/TextArea';
import ProgressBar from 'components/ProgressBar';
import notification from 'components/Notification';

const KitchenSink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorBoudary, setErrorBoudary] = useState([]);
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);

  const notificationTypes = ['success', 'error', 'info', 'warn'];

  const { t } = useTranslation();

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
    notification[currentType](`This is a ${currentType} notification`);
    setCurrentTypeIndex(prev => (prev + 1) % notificationTypes.length);
  };

  return (
    <Space direction="vertical" size="middle" className="d-flex">
      <Card title={t('components.customButton')} size="small" className="border border-dark">
        <Loader loading={loading} message={t('buttons.saving')}>
          <Button className="px-0" type="link">
            {t('links.usedForLink')}
          </Button>
          <Button className="px-0" type="link">
            {t('links.usedForButtonLink')}
          </Button>
          <Button className={'w-100'} htmlType="submit">
            {t('buttons.button')}
          </Button>
          <Button
            icon={<SaveOutlined className="d-block" />}
            loading={loading}
            title="Save User Info"
            onClick={handleSave}
          >
            {loading ? t('buttons.saving') : t('buttons.save')}
          </Button>
        </Loader>
      </Card>
      <Card title={t('components.customInputField')} size="middle" className="border border-dark">
        <Input
          name="email"
          label={t('labels.inputLabel')}
          rules={[{ required: true, message: 'Please Enter Input Field' }]}
          placeholder={t('labels.inputLabel')}
          className={'mb-0'}
        />
        <ProgressBar />
      </Card>
      <Card title={t('components.customTitle')} size="middle" className="border border-dark">
        <Title level={3}>{t('components.customTitle')}</Title>
      </Card>
      <Card title={t('components.customModal')} size="middle" className="border border-dark">
        <Button type="primary" onClick={handleOpenModal}>
          {t('buttons.openModal')}
        </Button>
        <Modal title="Sample Modal" isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}>
          <p>Modal 1</p>
          <p>Modal 2</p>
          <p>Modal 3</p>
        </Modal>
      </Card>
      <Card title={t('components.customRichEditor')} size="middle" className="border border-dark">
        <Form name="sample_form" onFinish={onFinish}>
          <Space className="w-100" direction="vertical" size="middle">
            <Editor name="description" />
            <Button htmlType="submit" className="mt-3">
              {t('buttons.submit')}
            </Button>
          </Space>
        </Form>
      </Card>
      <Card title={t('components.errorBoundary')} size="middle" className="border border-dark">
        <ErrorBoundary>
          <Button onClick={handleThrowError}>{t('buttons.throwError')}</Button>
          {errorBoudary[0]}
        </ErrorBoundary>
      </Card>
      <Card title="Notification" size="middle" className="border border-dark">
        <Button onClick={handleNotification} htmlType="button">
          {`Show ${notificationTypes[currentTypeIndex]} Notification`}
        </Button>
      </Card>
      <Card title={t('components.textArea')} size="middle" className="border border-dark">
        <Form name="switch_form" onFinish={onFinish}>
          <Switch name="toggle" valuePropName="checked" />
          <Button htmlType="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Card>
      <Card title="TextArea" size="middle" className="border border-dark">
        <Form name="sample_textArea" onFinish={onFinish}>
          <TextArea name="textArea" showCount rows={6} maxLength={100} />
          <Button htmlType="submit">{t('buttons.submit')}</Button>
        </Form>
      </Card>
    </Space>
  );
};

export default KitchenSink;
