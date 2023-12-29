import { Form, Card, Row, Col } from 'antd';

import CustomTitle from 'components/Title';
import FormFields from '../FormFields';

const SecurityTabFormItems = [
  { label: 'Current Password', name: 'password' },
  { label: 'Password', name: 'newPassword' },
  { label: 'Confirm New Password', name: 'confirmPwd' }
];

const SecuritySettings = () => (
  <Row>
    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
      <Card className="shadow-1">
        <CustomTitle level={3}>Change Password</CustomTitle>
        <Form layout="vertical">
          <FormFields formItems={SecurityTabFormItems} />
        </Form>
      </Card>
    </Col>
  </Row>
);

export default SecuritySettings;
