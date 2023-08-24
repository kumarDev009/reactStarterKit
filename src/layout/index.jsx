import { useState } from 'react';
import { Layout } from 'antd';

import Sidebar from 'layout/Sidebar';
import Header from 'layout/Header';
import Content from 'layout/Content';
import Footer from 'layout/Footer';

export default function LayoutElement() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="overflow-scroll">
      <Layout className="d-flex flex-direction-column">
        <Header collapsed={collapsed} onCollapsed={setCollapsed} />
        <div className="d-flex">
          <Sidebar collapsed={collapsed} />
          <Content />
        </div>
      </Layout>
      <Footer />
    </Layout>
  );
}
