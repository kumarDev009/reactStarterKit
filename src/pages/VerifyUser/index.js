import { Col, Row, Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import Button from 'components/Button';
import Title from 'components/Title';
import { useVerifyUser } from 'services/query/auth';
import { LOGIN_PATH } from 'constants/route';
import { handleToast } from 'utils';

const VerifyUser = ({ email, onBackToRegister }) => {
  const verifyMutation = useVerifyUser();

  const navigate = useNavigate();

  const onFinish = value => {
    verifyMutation.mutate(
      {
        email,
        userVerificationCode: Number(value.verificationCode)
      },
      {
        onSuccess: response => {
          if (response?.message) {
            handleToast('success', response);
            navigate(LOGIN_PATH);
          }
        },
        onError: err => {
          handleToast('error', err);
        }
      }
    );
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={3}>Verify Your Email</Title>
        </Col>
      </Row>
      <Form name="verifyUser_form" layout="vertical" onFinish={onFinish} requiredMark={true}>
        <Row>
          <Col span={24}>
            <Input
              name="verificationCode"
              label="Verification Code"
              placeholder="Enter the code you received in your email"
              autoFocus={true}
              rules={[{ required: true, message: 'Please enter the verification code!' }]}
              onKeyPress={e => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button loading={verifyMutation.isLoading} block htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="link" onClick={onBackToRegister}>
              Back to Register
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default VerifyUser;
