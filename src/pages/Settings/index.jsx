import { useState } from 'react';

import { Tabs } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';

import AccountSettings from './components/AccountSettings';
import SecuritySettings from './components/SecuritySettings';
import Button from 'components/Button';

import './index.scss';

const { TabPane } = Tabs;

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
