import { useState } from 'react';
import { Row, Col, Form } from 'antd';

import Input from 'components/Input';
import Title from 'components/Title';
import Button from 'components/Button';
import useTimer from 'customHooks/useTimer';
import { SECONDS } from '../../constants/forgot_password';

const VerifyOtp = ({ otpVerification = () => {} }) => {
  const [otpValue, setOtpValue] = useState();

  const handleOtpValue = e => {
    setOtpValue(e.target.value);
  };

  const handleOtpVerification = () => {
    if (otpValue.length >= 2) {
      return otpVerification(true);
    }
  };

  const handleKeyPress = e => {
    if (!/^[0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const { timeInSeconds, countDown, handleResetCounter } = useTimer(SECONDS);

  return (
    <>
      <Row>
        <Title level={3}>OTP Verification</Title>
      </Row>
      <Form name="otpVerification_form" layout="vertical">
        <>
          <Col span={24}>
            <Input
              label="Enter your OTP value"
              placeholder="Enter OTP value"
              onChange={handleOtpValue}
              onKeyPress={e => handleKeyPress(e)}
              autoFocus={true}
              min={1}
            />
          </Col>
          <Row justify="space-between">
            <Col className="pt-1">
              Time Remaining : <span style={{ color: '#f50206' }}>{countDown}</span>
            </Col>
            <Col>
              <Button type="link" disabled={timeInSeconds > 0} onClick={handleResetCounter}>
                Resend OTP
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="mt-2">
              <Button block disabled={!otpValue} onClick={handleOtpVerification}>
                Verify OTP
              </Button>
            </Col>
          </Row>
        </>
      </Form>
    </>
  );
};

export default VerifyOtp;
