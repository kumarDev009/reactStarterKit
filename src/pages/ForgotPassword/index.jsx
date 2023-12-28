import { useState } from 'react';
import { Form, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

import AuthLayout from 'components/Auth';
import Button from 'components/Button';
import Input from 'components/Input';
import Title from 'components/Title';
import VerifyOtp from '../../components/VerifyOtp';
import { LOGIN_PATH } from 'constants/route';
import { emailRegex } from 'constants';

import ResetPassword from 'pages/ResetPassword';
import { useGenerateOtp } from 'services/query/auth';

const ForgotPassword = () => {
  const [isSendOtp, setIsSendOtp] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [emailId, setEmailId] = useState('');

  const generateOtpMutation = useGenerateOtp();

  const navigate = useNavigate();

  const onFinish = values => {
    setEmailId(values.email);
    generateOtpMutation.mutate(values, {
      onSuccess: () => {
        setIsSendOtp(true);
      }
    });
  };

  return (
    <AuthLayout>
      {!isSendOtp ? (
        <>
          <Title level={3}>Forgot Password</Title>
          <Form name="forgotPassword_form" layout="vertical" onFinish={onFinish}>
            <Row>
              <Col span={24}>
                <Input
                  name="email"
                  autoFocus={true}
                  label="Email Address"
                  placeholder="Email Address"
                  rules={[
                    { required: true, message: 'Please enter your Email!' },
                    {
                      pattern: new RegExp(emailRegex),
                      message: 'The input is not valid E-mail!'
                    }
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button block htmlType="submit">
                  Send OTP
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="p-0" type="link" onClick={() => navigate(LOGIN_PATH)}>
                  Back to Login
                </Button>
              </Col>
            </Row>
          </Form>
        </>
      ) : isSendOtp && !isVerify ? (
        <VerifyOtp otpVerification={setIsVerify} emailId={emailId} />
      ) : (
        isVerify && <ResetPassword emailId={emailId} />
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
