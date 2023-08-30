import { useState } from 'react';
import { Col, Form, Row, Popover, Typography } from 'antd';

import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import AuthLayout from 'components/Auth';
import ProgressBar from 'components/ProgressBar';
import PhoneInputField from 'components/PhoneInput';

import {
  lowerCaseRegex,
  upperCaseRegex,
  numberRegex,
  specialCharRegex,
  PASSWORD_SUGGESTION_DESCRIPTION
} from 'constants/signup';

import './index.scss';

const { Link } = Typography;

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStatus, setPasswordStatus] = useState({});
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);

  const onFinish = values => {
    console.log('values', { ...values });
  };

  const passwordValidator = value => {
    const lengthScore = value.length;
    const complexityScore =
      lowerCaseRegex.test(value) +
      upperCaseRegex.test(value) +
      numberRegex.test(value) +
      specialCharRegex.test(value) +
      (lengthScore >= 8 ? 1 : 0);

    const complexityPercentage = lengthScore > 0 ? (complexityScore / 5) * 100 : 0;

    let status = {
      type: '',
      color: '',
      percent: complexityPercentage
    };
    if (complexityScore <= 2) {
      status = {
        ...status,
        type: 'weak',
        color: '#ff4d4f'
      };
    } else if (complexityScore <= 4) {
      status = {
        ...status,
        type: 'Medium',
        color: '#e89b1e'
      };
    } else if (complexityScore === 5) {
      status = {
        ...status,
        type: 'strong',
        color: '#1ee880'
      };
    }
    return status;
  };

  const handlePassword = e => {
    const value = e.target.value;
    setPassword(value);
    const passwordStrength = passwordValidator(value);
    return setPasswordStatus(passwordStrength);
  };

  const headerProgressBar = () => {
    return (
      <div style={{ width: '400px' }}>
        <ProgressBar
          percent={passwordStatus.percent}
          strokeLinecap="square"
          strokeColor={passwordStatus.color}
          showInfo={false}
        />
        <div>{passwordStatus.type ? passwordStatus.type : 'Enter a password'}</div>
        <h6 className="pt-2 fw-bold">Suggestion</h6>
        <div>
          {PASSWORD_SUGGESTION_DESCRIPTION.map((description, index) => {
            return (
              <ul key={index}>
                <li>{description.label}</li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  };

  const handleConfirmPassword = e => {
    return setConfirmPassword(e.target.value);
  };

  const confirmPasswordValidator = () => {
    if (password !== confirmPassword) {
      return Promise.reject('The new password that you entered do not match!');
    }
    return Promise.resolve();
  };

  const handleTermsAndCondition = () => {
    setIsCheckedTerms(prev => !prev);
  };

  return (
    <AuthLayout>
      <div className="sign-up-screen">
        <Row>
          <Col span={24}>
            <Title level={3} className="title">
              Sign Up
            </Title>
          </Col>
        </Row>
        <Form name="signUp_form" onFinish={onFinish} requiredMark={true} className="form">
          <Row>
            <Col span={24}>
              <Input
                name="email"
                label="Email Address"
                placeholder="Email"
                autoFocus={true}
                rules={[
                  { required: true, message: 'Please enter your Email!' },
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  }
                ]}
                className={'mb-0'}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Popover placement="bottom" trigger="click" content={() => headerProgressBar()}>
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  min={8}
                  rules={[{ required: true, message: 'Please enter your Password!' }]}
                  onChange={handlePassword}
                />
              </Popover>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                min={8}
                rules={[
                  { required: true, message: 'Please enter your ConfirmPassword!' },
                  { validator: confirmPasswordValidator }
                ]}
                onChange={handleConfirmPassword}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <PhoneInputField name="phoneNumber" label="Phone Number" defaultCountry={'in'} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <CheckBox
                name="acceptTerms"
                label={
                  <label>
                    I have read the <Link href="https://termsandconditions">Terms and conditions</Link>
                  </label>
                }
                rules={[{ required: true, message: 'Please accept the terms and conditions!' }]}
                onChange={handleTermsAndCondition}
                checked={isCheckedTerms}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Button block htmlType="submit">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
