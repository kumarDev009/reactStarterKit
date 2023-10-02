import { useState } from 'react';
import { Col, Form, Row, Popover } from 'antd';

import Link from 'components/Link';
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

const SignUp = () => {
  const [passwordStatus, setPasswordStatus] = useState({});

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
        type: 'Weak',
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
        type: 'Strong',
        color: '#1ee880'
      };
    }
    return status;
  };

  const handlePassword = e => {
    const value = e.target.value;
    const passwordStrength = passwordValidator(value);
    return setPasswordStatus(passwordStrength);
  };

  const headerProgressBar = () => {
    return (
      <div style={{ width: '400px' }}>
        <ProgressBar percent={passwordStatus.percent} strokeColor={passwordStatus.color} showInfo={false} />
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

  const checkboxValidator = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Please accept the terms and conditions!'));
    }
    return Promise.resolve();
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
        <Form
          name="signUp_form"
          layout="vertical"
          onFinish={onFinish}
          requiredMark={true}
          className="form"
          initialValues={{ country: 'IN +91' }}
        >
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
              <Popover placement="bottom" trigger="focus" content={() => headerProgressBar()}>
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
                  { required: true, message: 'Please enter your confirm password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (value !== '' && getFieldValue('password') !== value) {
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
              <PhoneInputField phoneName="phoneNumber" countryName="country" label="Phone Number" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <CheckBox
                name="acceptTerms"
                label={
                  <span>
                    I have read the <Link href="https://termsandconditions">Terms and conditions</Link>
                  </span>
                }
                rules={[{ validator: checkboxValidator }]}
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
          <Row justify="center" align={'center'}>
            Version {process.env.REACT_APP_VERSION}
          </Row>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
