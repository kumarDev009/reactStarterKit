import { Layout, Row, Col } from 'antd';

import Sidebar from 'layout/Sidebar';
import Header from 'layout/Header';
import Content from 'layout/Content';
import Footer from 'layout/Footer';

const { Content: AntdContent } = Layout;

export default function LayoutElement() {
  /* TODO: Later revisit this page for redesign with built-in component. */
  return (
    <Layout className="vh-100 layoutWrapper">
      <Header />
      <Layout className="d-flex">
        <Sidebar />
        <AntdContent className="d-flex flex-direction-column flex-grow-1">
          <Row className="flex-grow-1 overflow-y-auto">
            <Col span={24} className="contentWrapper">
              <Content />
            </Col>
            <Col span={24}>
              <Footer />
            </Col>
          </Row>
        </AntdContent>
      </Layout>
    </Layout>
  );
}
