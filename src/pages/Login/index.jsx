import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'antd';

import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Input from 'components/Input';
import Title from 'components/Title';
import AuthLayout from 'components/Auth';

import { STATIC_LOGIN_CREDENTIALS } from 'constants/login';
import { HOME_PATH } from 'constants/route';
import { SIGNUP_PATH } from 'constants/signup';

import { AuthContext } from 'context/authContext';
import { setStorage } from 'services/storage';

import './index.scss';

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
      <Row>
        <Col span={12}>
          <Title level={3}>Login</Title>
        </Col>
        <Col className="d-flex justify-content-end" span={12}>
          <Button className="px-0" type="link" onClick={handleLink}>
            Don't have an account?
          </Button>
        </Col>
      </Row>

      <Form name="login_form" onFinish={onFinish}>
        <Row>
          <Col span={24}>
            <Input
              name="email"
              label="Email Address"
              rules={[{ required: true, message: 'Please enter your Email!' }]}
              className={'mb-0'}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
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
            <CheckBox name="remember_me" label={'Keep me sign in'} />
          </Col>
          <Col className="d-flex justify-content-end" span={12}>
            <Button className="px-0" type="link">
              Forgot Password ?
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="w-100" span={24}>
            <Button className={'w-100'} htmlType="submit">
              Login
            </Button>
          </Col>
        </Row>
        <Row className="mb-2" justify="center">
          <div className="d-flex align-items-center justify-content-center">
            <Col span={24} offset={2}>
              <span>Version {process.env.REACT_APP_VERSION}</span>
            </Col>
          </div>
        </Row>
      </Form>
    </AuthLayout>
  );
};

export default Login;
