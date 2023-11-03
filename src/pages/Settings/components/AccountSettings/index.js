import { Avatar, Form, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Button from 'components/Button';
import FormFields from '../FormFields';

const accountFormItems = [
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
      <FormFields formItems={accountFormItems} size={12} />
      <div className="d-flex align-items-center mt-3">
        <Button className="btn">Save Changes</Button>
        <Button type="default" className=" mx-3 input-height">
          Reset
        </Button>
      </div>
    </Form>
  </Card>
);

export default AccountSettings;
