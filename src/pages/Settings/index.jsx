import React, { useState } from 'react';

import { Avatar, Tabs, Form, Row, Card, Upload, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';

import Input from 'components/Input';
import Button from 'components/Button';
import CustomTitle from 'components/Title';

import './index.scss';
import Password from 'components/Password';

const { TabPane } = Tabs;

const AccountSettings = ({ uploadedImage, handleImageUpload, handImageReset }) => (
  <Card className="accountTab shadow-1 mb-2">
    <div className="d-flex">
      <div>
        <Avatar icon={<UserOutlined />} src={uploadedImage} shape="square" size={100} className="object-cover" />
      </div>
      <Upload showUploadList={false} onChange={handleImageUpload} className="mx-3 mt-3">
        <Button className="btn">UPLOAD NEW PHOTO</Button>
      </Upload>
      <Button type="default" className="mt-3" style={{ height: '2.5rem' }} onClick={handImageReset}>
        Reset
      </Button>
    </div>
    <Form layout="vertical" className="mt-3">
      <FormFields />
      <div className="d-flex align-items-center">
        <Button className="btn mt-4">Save Changes</Button>
        <Button type="default" className="mt-3 mx-3" style={{ height: '2.5rem' }}>
          Reset
        </Button>
      </div>
    </Form>
  </Card>
);

const SecuritySettings = () => (
  <Card className="shadow-1">
    <CustomTitle level={3}>Change Password</CustomTitle>
    <Form layout="vertical">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Input label="Current Password" className="input-height" style={{ height: '2.5rem' }} />
        </Col>
        <Col span={12}></Col>
        <Col span={12}>
          <Password
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            style={{ height: '2.5rem' }}
          />
        </Col>
        <Col span={12}>
          <Input label="Confirm New Password" type="password" className="input-height" style={{ height: '2.5rem' }} />
        </Col>
      </Row>
    </Form>
  </Card>
);

const FormFields = () => {
  const formItems = [
    { label: 'First Name' },
    { label: 'Last Name' },
    { label: 'Email' },
    { label: 'Organization' },
    { label: 'Phone Number' },
    { label: 'Address' },
    { label: 'State' },
    { label: 'Zip Code' },
    { label: 'Country' },
    { label: 'Language' }
  ];

  return (
    <Row gutter={[16, 16]}>
      {formItems.map(item => (
        <Col span={12} key={item.label}>
          <Input label={item.label} name={item.label} className="input-height" style={{ height: '2.5rem' }} />
        </Col>
      ))}
    </Row>
  );
};

const TabLabel = ({ icon: Icon, label, isSelected }) => (
  <Button type={isSelected ? 'default' : 'text'} className={`d-flex align-items-center ${isSelected ? 'btn' : ''}`}>
    <Icon />
    <span className="mx-0">{label}</span>
  </Button>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = info => {
    const reader = new FileReader();
    reader.onload = e => setUploadedImage(e.target?.result);
    if (info?.file?.originFileObj) reader.readAsDataURL(info.file.originFileObj);
  };

  const handImageReset = () => {
    setUploadedImage(null);
  };

  const handleOnchange = key => setActiveTab(key);

  return (
    <div>
      <Tabs defaultActiveKey="1" activeKey={activeTab} onChange={handleOnchange}>
        <TabPane tab={<TabLabel icon={UserOutlined} label="ACCOUNT" isSelected={activeTab === '1'} />} key="1">
          <AccountSettings
            uploadedImage={uploadedImage}
            handleImageUpload={handleImageUpload}
            handImageReset={handImageReset}
          />
        </TabPane>
        <TabPane tab={<TabLabel icon={UnlockOutlined} label="SECURITY" isSelected={activeTab === '2'} />} key="2">
          <SecuritySettings />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Settings;
