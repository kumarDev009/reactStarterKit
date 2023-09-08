import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'antd';

import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Input from 'components/Input';
import Title from 'components/Title';
import AuthFooter from 'components/AuthFooter';

import { LOGIN_FOOTER_DISCLAIMER_TEXT, STATIC_LOGIN_CREDENTIALS } from 'constants/login';
import { DASHBOARD_PATH } from 'constants/route';

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
      navigate(DASHBOARD_PATH, { replace: true });
    } else {
      alert('Enter the valid email and password');
    }
  };
  const footerAreaText = () => {
    return LOGIN_FOOTER_DISCLAIMER_TEXT.map((val, index) => {
      return <AuthFooter key={index} className="cursor-pointer" footerLabel={val.label} />;
    });
  };
  return (
    <div>
      <div className="login-bg-image"></div>
      <div>
        <div className="login-screen">
          <div className="official-logo">
            <img src="/assets/images/logo.png" alt="mainlogo" />
          </div>
          <div className="login-parent-container">
            <div className="login-container">
              <Row>
                <Col span={12}>
                  <Title level={3}>Login</Title>
                </Col>
                <Col className="d-flex justify-content-end" span={12}>
                  <Button className="px-0" type="link">
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
            </div>
            <Row className="footer-disclaimer-mob ">
              <Col className="d-flex justify-content-center mt-3">
                <AuthFooter isLink={true} footerLabel={'This site is protected by '} linkText="Privacy Policy" />
              </Col>
              <Col className="d-flex gap-5 mt-2">{footerAreaText()}</Col>
            </Row>
          </div>
          <Row className="footer-disclaimer">
            <Col span={9} className="d-flex justify-content-center">
              <AuthFooter isLink={true} footerLabel={'This site is protected by '} linkText="Privacy Policy" />
            </Col>
            <Col span={7}></Col>
            <Col span={8} className="d-flex gap-3">
              {footerAreaText()}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Login;
