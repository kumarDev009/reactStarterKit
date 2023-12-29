import { useState } from 'react';
import { Col, Form, Row } from 'antd';
import { useNavigate, Link as NavLink } from 'react-router-dom';

import Link from 'components/Link';
import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import AuthLayout from 'components/Auth';
import Password from 'components/Password';
import PhoneInputField from 'components/PhoneInput';
import { LOGIN_PATH } from 'constants/route';
import { useRegister } from 'services/query/auth';
import VerifyUser from './components/verifyUser';

import './index.scss';

const SignUp = () => {
  const [verifyEmail, setVerifyEmail] = useState('');
  const [initialFormValues, setInitialFormValues] = useState({});

  const navigate = useNavigate();
  const registerMutation = useRegister();

  const onFinish = values => {
    console.log('values', { ...values });
    setVerifyEmail(values.email);
    setInitialFormValues(values);
    const userDetails = {
      email: values.email,
      password: values.password,
      firstName: 'kumar',
      lastName: 'user',
      phone: '123456789',
      address1: '57',
      address2: 'street name',
      city: 'Kovilpatti',
      state: 'TamilNadu',
      country: values.country.split(' ')[0],
      zip_code: '628501',
      role: 'User'
    };
    registerMutation.mutate(userDetails);
  };

  const handleBackToRegister = () => {
    registerMutation.reset();
  };

  const checkboxValidator = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Please accept the terms and conditions!'));
    }
    return Promise.resolve();
  };

  return (
    <AuthLayout>
      {registerMutation.isSuccess ? (
        <VerifyUser email={verifyEmail} onBackToRegister={handleBackToRegister} btnTitle="Back to Register" />
      ) : (
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
            initialValues={{ country: 'IN +91', ...initialFormValues }}
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
                <Password
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  rules={[{ required: true, message: 'Please enter your Password!' }]}
                />
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
                <Button loading={registerMutation.isLoading} block htmlType="submit">
                  Sign Up
                </Button>
              </Col>
            </Row>
            <Row justify="center" align={'center'} className="mb-2 align-items-baseline">
              Already have an account? &nbsp;
              <NavLink to={LOGIN_PATH} className="remove-border">
                {' '}
                Login{' '}
              </NavLink>
            </Row>
            <Row justify="center" align={'center'}>
              Version {process.env.REACT_APP_VERSION}
            </Row>
          </Form>
        </div>
      )}
    </AuthLayout>
  );
};

export default SignUp;
