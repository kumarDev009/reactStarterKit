import { Layout } from 'antd';

const { Footer } = Layout;

export default function CustomFooter() {
  return (
    <div>
      <Footer style={{ textAlign: 'center' }}>{new Date().getFullYear()} © All Right Reserved. MitrahSoft</Footer>
    </div>
  );
}
