import { Layout } from 'antd';

import Sidebar from 'layout/Sidebar';
import Header from 'layout/Header';
import Content from 'layout/Content';
import Footer from 'layout/Footer';

export default function LayoutElement() {
  return (
    <Layout className="overflow-scroll">
      <Sidebar />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
}
