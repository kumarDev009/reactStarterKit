import { Row, Layout, Card, Image } from 'antd';

import AuthFooter from 'components/AuthFooter';
import './index.scss';

// TODO: We need to replace this from components/Content once the other PR merge.
const { Content } = Layout;

const AuthLayout = ({ children }) => {
  return (
    <Layout className="bg-image">
      <Content className="landing-screen">
        <Row className="official-logo">
          <Image src="/assets/images/logo.png" alt="main-logo" preview={false} height={100} />
        </Row>
        <Row justify={'center'} align={'middle'} className="parent-container">
          <Card className="container form-content">{children}</Card>
        </Row>
        <AuthFooter />
      </Content>
    </Layout>
  );
};

export default AuthLayout;
