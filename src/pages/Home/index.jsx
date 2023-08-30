import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
  return (
    <Content className="d-flex justify-content-between p-5">
      <Title>Welcome to the Home Page</Title>
    </Content>
  );
};

export default Home;
