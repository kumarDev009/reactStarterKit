import { Col, Form, Row } from 'antd';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomButton } from '../../Components/FormFields/CustomButton';
import { CheckBoxField } from '../../Components/FormFields/CustomCheckBoxField';
import { InputField } from '../../Components/FormFields/CustomInputfield';
import { CustomTitle } from '../../Components/FormFields/CustomTitle';
import AuthLayout from '../../Components/Auth';
import { STATIC_LOGIN_CREDENTIALS, HOME_PATH, SIGNUP_PATH } from '../../constants';
import { AuthContext } from '../../services/context/authContext';
import { setStorage } from '../../utils/storage';

const Login = () => {
  const { setHasStorage } = useContext(AuthContext);

  const navigate = useNavigate();

  const onFinish = values => {
    if (
      values.email === STATIC_LOGIN_CREDENTIALS.email &&
      parseInt(values.password) === STATIC_LOGIN_CREDENTIALS.password
    ) {
      let submittedData = JSON.stringify(values);
      setStorage('username', values.email);
      setHasStorage(submittedData);
      navigate(HOME_PATH, { replace: true });
    } else {
      alert('Enter the valid email and password');
    }
  };

  const handleLink = () => {
    navigate(SIGNUP_PATH, { replace: true });
  };

  return (
    <AuthLayout>
      <div>
        <Row>
          <Col span={12}>
            <CustomTitle title_text="Login" text_level={3} />
          </Col>
          <Col className="d-flex justify-content-end" span={12}>
            <CustomButton className="px-0" type="link" buttonText={"Don't have an account ?"} onClick={handleLink} />
          </Col>
        </Row>
        <Form name="login_form" onFinish={onFinish}>
          <Row>
            <Col span={24}>
              <InputField
                name="email"
                label="Email Address"
                rules={[{ required: true, message: 'Please enter your Email!' }]}
                className={'mb-0'}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <InputField
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                rules={[{ required: true, message: 'Please enter your Password!' }]}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <CheckBoxField name="remember_me" label={'Keep me sign in'} />
            </Col>
            <Col className="d-flex justify-content-end" span={12}>
              <CustomButton className="px-0" buttonText={' Forgot Password ?'} htmlType="button" type="link" />
            </Col>
          </Row>
          <Row>
            <Col className="w-100" span={24}>
              <CustomButton className={'w-100'} buttonText={'Login'} htmlType="submit" />
            </Col>
          </Row>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default Login;
