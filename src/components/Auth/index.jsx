import { Col, Row } from 'antd';

import { LOGIN_FOOTER_DISCLAIMER_TEXT } from 'constants/login';
import AuthFooter from 'components/AuthFooter';
import './index.scss';

const AuthLayout = ({ children }) => {
  const footerAreaText = () => {
    return LOGIN_FOOTER_DISCLAIMER_TEXT.map((val, index) => {
      return <AuthFooter type="text" className="cursor-pointer" footerLabel={val.label} key={index} />;
    });
  };

  return (
    <>
      <div className="bg-image"></div>
      <div>
        <div className="landing-screen">
          <div className="official-logo">
            <img src="/assets/images/logo.png" alt="mainlogo" />
          </div>
          <div className="parent-container">
            <div className="container form-content">{children}</div>
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
    </>
  );
};

export default AuthLayout;
