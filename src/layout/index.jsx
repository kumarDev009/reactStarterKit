import { Layout } from 'antd';

import Sidebar from 'layout/Sidebar';
import Header from 'layout/Header';
import Content from 'layout/Content';
import Footer from 'layout/Footer';

export default function LayoutElement() {
  return (
    <Layout className="hv-100">
      <Header />
      <Layout className="d-flex mt-4">
        <Sidebar />
        <div className="d-flex flex-direction-column flex-grow-1">
          <div className="flex-grow-1 overflow-y-auto">
            <div style={{ minHeight: '85%' }}>
              <Content />
            </div>
            <Footer />
          </div>
        </div>
      </Layout>
    </Layout>
  );
}
