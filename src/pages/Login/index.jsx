import { useContext, useEffect, useState } from 'react';
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
  const [emailToVerify, setEmailToVerify] = useState('');
  const [initialFormValues, setInitialFormValues] = useState({});

  const { setHasStorage } = useContext(AuthContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const loginMutation = useLoginUser();

  useEffect(() => {
    if (loginMutation.isSuccess) {
      const token = loginMutation.data?.data?.token;
      if (token) {
        setStorage('token', token);
        setHasStorage(token);
        navigate(HOME_PATH);
      }
    }
  }, [loginMutation.isSuccess, loginMutation.data, navigate, setHasStorage]);

  const onFinish = values => {
    setInitialFormValues(values);
    setEmailToVerify(values.email);
    loginMutation.mutate({
      email: values.email,
      password: values.password
    });
  };

  const handleBackToRegister = () => {
    loginMutation.reset();
  };

  return (
    <AuthLayout>
      {loginMutation?.isSuccess && !loginMutation.data?.data?.token ? (
        <VerifyUser email={emailToVerify} onBackToRegister={handleBackToRegister} login />
      ) : (
        <>
          <Row justify="space-between">
            <Title level={3}>{t('login.login')}</Title>
          </Row>
          <Form name="login_form" layout="vertical" initialValues={initialFormValues} onFinish={onFinish}>
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
