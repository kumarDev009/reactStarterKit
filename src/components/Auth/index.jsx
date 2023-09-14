import { Col, Row, Layout, Card, Image } from 'antd';

import { LOGIN_FOOTER_DISCLAIMER_TEXT } from 'constants/login';
import AuthFooter from 'components/AuthFooter';
import './index.scss';

// TODO: We need to replace this from components/Content once the other PR merge.
const { Content } = Layout;

const AuthLayout = ({ children }) => {
  const footerAreaText = () => {
    return LOGIN_FOOTER_DISCLAIMER_TEXT.map((val, index) => {
      return <AuthFooter type="text" className="cursor-pointer" footerLabel={val.label} key={index} />;
    });
  };

  return (
    <Layout className="bg-image">
      <Content className="landing-screen">
        <Row className="official-logo">
          <Image src="/assets/images/logo.png" alt="mainlogo" preview={false} height={100} />
        </Row>
        <Row justify={'center'} align={'middle'} className="parent-container">
          <Card className="container form-content">{children}</Card>
        </Row>
        <Row className="footer-disclaimer">
          <Col span={9} className="d-flex justify-content-center">
            <AuthFooter isLink={true} footerLabel={'This site is protected by '} linkText="Privacy Policy" />
          </Col>
          <Col span={7}></Col>
          <Col span={8} className="d-flex gap-3">
            {footerAreaText()}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
