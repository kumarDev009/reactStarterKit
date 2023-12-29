import { useContext, useState } from 'react';
import { useNavigate, Link as NavLink } from 'react-router-dom';
import { Col, Form, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Input from 'components/Input';
import Title from 'components/Title';
import AuthLayout from 'components/Auth';
import VerifyUser from 'pages/SignUp/components/verifyUser';

import { SIGNUP_PATH, FORGOT_PASSWORD_PATH } from 'constants/route';

import { useLoginUser } from 'services/query/auth';

import './index.scss';

const Login = () => {
  const [emailToVerify, setEmailToVerify] = useState('');

  const navigate = useNavigate();
  const { t } = useTranslation();

  const loginMutation = useLoginUser();

  const onFinish = values => {
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
        <VerifyUser email={emailToVerify} onBackToRegister={handleBackToRegister} btnTitle="Back to Login" login />
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
                  rules={[
                    { required: true, message: 'Please enter your Email!' },
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!'
                    }
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Input name="password" label={t('labels.passwordLabel')} type="password" placeholder="Password" />
              </Col>
            </Row>
            <Row justify="space-between" className="align-items-baseline">
              <CheckBox name="remember_me" label={t('labels.keepMeSignedIn')} />
              <NavLink to={FORGOT_PASSWORD_PATH} className="remove-border">
                {t('login.forgotPassword')}
              </NavLink>
            </Row>
            <Row>
              <Col span={24}>
                <Button block htmlType="submit" loading={loginMutation.isLoading}>
                  Login
                </Button>
              </Col>
            </Row>
            <Row justify="center" align={'center'} className="mb-2 align-items-baseline">
              {t('login.dontHaveAccount')} &nbsp;{' '}
              <NavLink to={SIGNUP_PATH} className="remove-border">
                Register
              </NavLink>
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
