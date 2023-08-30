import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export default function Dashboard() {
  return (
    <Content className="d-flex justify-content-between p-5">
      <Title level={3}>Welcome to Dashboard Page</Title>
    </Content>
  );
}
