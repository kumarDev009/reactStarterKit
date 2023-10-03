import { useState } from 'react';

import { Row, Col, Form } from 'antd';

import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';
import Link from 'components/Link';

import { LOGIN_PATH } from 'constants/route';

const ResetPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const onFinish = values => {
    setIsSuccess(true);
    console.log('values', values);
  };

  return isSuccess ? (
    <>
      <p>Your Password has been updated Successfully!</p>
      Login now? &nbsp; <Link href={LOGIN_PATH}>Login</Link>
    </>
  ) : (
    <>
      <Title level={3}>New Password</Title>
      <Form name="passwordReset_form" layout="vertical" onFinish={onFinish}>
        <Row>
          <Col span={24}>
            <Input
              name="newPassword"
              label="New Password" //TODO: Need to update the Password component
              type="password"
              autoFocus={true}
              rules={[{ required: true, message: 'Please enter a New password' }]}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              rules={[{ required: true, message: 'Please enter a Confirm password' }]}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button block htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ResetPassword;
