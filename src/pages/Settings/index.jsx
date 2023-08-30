import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export default function Settings() {
  return (
    <Content className="d-flex justify-content-between p-5">
      <Title> Welcome to Settings Page</Title>
    </Content>
  );
}
