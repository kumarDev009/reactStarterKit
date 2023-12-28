import { useState } from 'react';

import { Row, Col, Form } from 'antd';

import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';
import Link from 'components/Link';

import { LOGIN_PATH } from 'constants/route';
import Password from 'components/Password';
import { usePasswordUpdate } from 'services/query/auth';

const ResetPassword = ({ emailId = '' }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const newPasswordUpdateMutation = usePasswordUpdate();

  const onFinish = values => {
    newPasswordUpdateMutation.mutate(
      { email: emailId, newPassword: values.newPassword },
      { onSuccess: setIsSuccess(prev => !prev) }
    );
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
            <Password
              name="newPassword"
              label="New Password"
              type="password"
              placeholder="Enter a new Password"
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
              placeholder="Enter a Confirm Password"
              type="password"
              rules={[
                { required: true, message: 'Please enter a Confirm password' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (value !== '' && getFieldValue('newPassword') !== value) {
                      return Promise.reject('The new password that you entered do not match!');
                    }
                    return Promise.resolve();
                  }
                })
              ]}
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
