import React, { useState } from 'react';

import { Avatar, Tabs, Form, Row, Card, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';

import Input from 'components/Input';
import Button from 'components/Button';
import CustomTitle from 'components/Title';
import Password from 'components/Password';

import './index.scss';

const { TabPane } = Tabs;

const AccountSettings = () => (
  <Card className="accountTab shadow-1 mb-2">
    <div className="d-flex">
      <div>
        <Avatar /* need to update this Avatar with custom user upload component once it's ready. */
          icon={<UserOutlined />}
          shape="square"
          size={100}
          className="object-cover"
        />
      </div>
    </div>
    <Form layout="vertical" className="mt-3">
      <FormFields />
      <div className="d-flex align-items-center">
        <Button className="btn">Save Changes</Button>
        <Button type="default" className=" mx-3 input-height">
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
      <Row gutter={[16, 0]}>
        <Col span={12}>
          <Input
            type="password"
            name="password"
            label="Current Password"
            placeholder="Current Password"
            className="input-height"
          />
        </Col>
        <Col span={12}></Col>
        <Col span={12}>
          <Password
            name="newPassword"
            label="Password"
            type="password"
            placeholder="Password"
            className="input-height"
          />
        </Col>
        <Col span={12}>
          <Input
            name="confirmPwd"
            label="Confirm New Password"
            placeholder="Confirm New Password"
            type="password"
            className="input-height"
          />
        </Col>
        <Col>
          <div className="d-flex align-items-center">
            <Button className="btn">Save Changes</Button>
            <Button type="default" className="mx-3 input-height">
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  </Card>
);

const FormFields = () => {
  const formItems = [
    { label: 'First Name', name: 'firstName' },
    { label: 'Last Name', name: 'lastName' },
    { label: 'Email', name: 'email' },
    { label: 'Password', name: 'password' },
    { label: 'Phone Number', name: 'phone' },
    { label: 'Address 1', name: 'address1' },
    { label: 'Address 2', name: 'address2' },
    { label: 'City', name: 'city' },
    { label: 'State', name: 'state' },
    { label: 'Country', name: 'country' },
    { label: 'Zip Code', name: 'zip_code' },
    { label: 'Admin', name: 'role' }
  ];

  return (
    <Row gutter={[16, 0]}>
      {formItems.map(item => (
        <Col span={12} key={item.label}>
          <Input label={item.label} name={item.name} placeholder={item.label} className="input-height" />
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

  const handleOnchange = key => setActiveTab(key);

  return (
    <Tabs defaultActiveKey="1" activeKey={activeTab} onChange={handleOnchange}>
      <TabPane tab={<TabLabel icon={UserOutlined} label="ACCOUNT" isSelected={activeTab === '1'} />} key="1">
        <AccountSettings />
      </TabPane>
      <TabPane tab={<TabLabel icon={UnlockOutlined} label="SECURITY" isSelected={activeTab === '2'} />} key="2">
        <SecuritySettings />
      </TabPane>
    </Tabs>
  );
};

export default Settings;
