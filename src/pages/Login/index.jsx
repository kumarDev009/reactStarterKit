import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Input from 'components/Input';
import Title from 'components/Title';
import AuthLayout from 'components/Auth';
import Link from 'components/Link';
import VerifyUser from 'pages/VerifyUser';

import { HOME_PATH, SIGNUP_PATH, FORGOT_PASSWORD_PATH } from 'constants/route';

import { AuthContext } from 'context/authContext';
import { setStorage } from 'services/storage';
import { useLoginUser } from 'services/query/auth';

import './index.scss';

const Login = () => {
  const { setHasStorage } = useContext(AuthContext);

  const [showVerify, setShowVerify] = useState(false);
  const [emailToVerify, setEmailToVerify] = useState('');

  const { t } = useTranslation();

  const navigate = useNavigate();

  const onLoginSuccess = token => {
    if (token) {
      setStorage('token', token);
      setHasStorage(token);
      navigate(HOME_PATH);
    } else {
      setShowVerify(true);
    }
  };

  const loginMutation = useLoginUser(onLoginSuccess);

  const onFinish = values => {
    setEmailToVerify(values.email);
    loginMutation.mutate({
      email: values.email,
      password: values.password
    });
  };

  const handleBackToRegister = () => {
    setShowVerify(false);
  };

  return (
    <AuthLayout>
      {showVerify ? (
        <VerifyUser email={emailToVerify} onBackToRegister={handleBackToRegister} />
      ) : (
        <>
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
            <Row justify="space-between" className="align-items-baseline">
              <CheckBox name="remember_me" label={t('labels.keepMeSignedIn')} />
              <Link href={FORGOT_PASSWORD_PATH}>{t('login.forgotPassword')}</Link>
            </Row>
            <Row>
              <Col span={24}>
                <Button block htmlType="submit" loading={loginMutation.isLoading}>
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
        </>
      )}
    </AuthLayout>
  );
};

export default Login;
