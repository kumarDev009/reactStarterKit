import React, { useState } from 'react';
import { Col, Form, Row, Popover } from 'antd';
import { CustomTitle } from '../../Components/FormFields/CustomTitle';
import { InputField } from '../../Components/FormFields/CustomInputfield';
import { CustomButton } from '../../Components/FormFields/CustomButton';
import { CheckBoxField } from '../../Components/FormFields/CustomCheckBoxField';
import AuthLayout from '../../Components/Auth';
import CustomProgressBar from '../../Components/FormFields/CustomProgress';
import {
  lowerCaseRegex,
  upperCaseRegex,
  numberRegex,
  specialCharRegex,
  PASSWORD_SUGGESTION_DESCRIPTION
} from '../../constants/signup';
import './index.scss';
import CustomPhoneField from '../../Components/FormFields/CustomPhonefield';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [passwordStatus, setPasswordStatus] = useState({});
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);

  const onFinish = values => {
    console.log('values', { ...values, phoneNumber });
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
        <CustomProgressBar
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

  const handleTermsAndCondition = e => {
    setIsCheckedTerms(e.target.checked);
  };
  return (
    <AuthLayout>
      <div className="sign-up-screen">
        <Row>
          <Col span={24}>
            <CustomTitle title_text="Sign Up" text_level={3} className="title" />
          </Col>
        </Row>
        <Form name="signUp_form" onFinish={onFinish} className="form">
          <Row>
            <Col span={24}>
              <InputField
                name="email"
                label="Email Address"
                placeholder="Email"
                rules={[{ required: true, message: 'Please enter your Email!' }]}
                className={'mb-0'}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Popover placement="bottom" trigger="click" content={() => headerProgressBar()}>
                <InputField
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
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                min={8}
                rules={[
                  { required: true, message: 'Please enter your Password!' },
                  { validator: confirmPasswordValidator }
                ]}
                onChange={handleConfirmPassword}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="input-phone-number">
                <div className="mb-2">Phone Number</div>
                <CustomPhoneField onChange={setPhoneNumber} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <CheckBoxField
                name="checkbox"
                label="Agree to the Terms and Conditions"
                type="checkbox"
                onChange={handleTermsAndCondition}
                checked={isCheckedTerms}
              />
            </Col>
          </Row>
          <Row>
            <Col className="w-100" span={24}>
              <CustomButton className={'w-100'} buttonText={'Sign Up'} htmlType="submit" />
            </Col>
          </Row>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
