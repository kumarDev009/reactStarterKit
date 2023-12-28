import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'antd';

import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Input from 'components/Input';
import Title from 'components/Title';
import AuthLayout from 'components/Auth';
import Link from 'components/Link';

import { STATIC_LOGIN_CREDENTIALS } from 'constants/login';

import { SIGNUP_PATH, FORGOT_PASSWORD_PATH, DASHBOARD_PATH } from 'constants/route';

import { AuthContext } from 'context/authContext';
import { setStorage } from 'services/storage';

import './index.scss';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { setHasStorage } = useContext(AuthContext);

  const { t } = useTranslation();

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

  return (
    <AuthLayout>
      <Row justify="space-between">
        <Title level={3}>{t('login.login')}</Title>
      </Row>

      <Form name="login_form" layout="vertical" onFinish={onFinish}>
        <Row>
          <Col span={24}>
            <Input
              name="email"
              autoFocus={true}
              label={t('labels.emailLabel')}
              rules={[{ required: true, message: 'Please enter your Email!' }]}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
              name="password"
              label={t('labels.passwordLabel')}
              type="password"
              placeholder="Password"
              rules={[{ required: true, message: 'Please enter your Password!' }]}
            />
          </Col>
        </Row>
        <Row justify="space-between">
          <CheckBox name="remember_me" label={t('labels.keepMeSignedIn')} />
          <Link href={FORGOT_PASSWORD_PATH}>{t('login.forgotPassword')}</Link>
        </Row>
        <Row>
          <Col span={24}>
            <Button block htmlType="submit">
              Login
            </Button>
          </Col>
        </Row>
        <Row justify="center" align={'center'} className="mb-2">
          {t('login.dontHaveAccount')} &nbsp;<Link href={SIGNUP_PATH}>Register</Link>
        </Row>
        <Row justify="center" align={'center'}>
          Version {process.env.REACT_APP_VERSION}
        </Row>
      </Form>
    </AuthLayout>
  );
};

export default Login;
