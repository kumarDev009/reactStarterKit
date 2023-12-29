import { Card, Row, Col, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function ProfilePopoverContent({ menuArr, onMenuClick }) {
  return (
    <Card className="shadow-1">
      <Row align="middle" justify="center" className="profile-info">
        <Col>
          <Avatar size={50} icon={<UserOutlined />} />
        </Col>
        <Col className="mx-2 d-flex flex-column">
          <Text className="fs-6 fw-bold">Username</Text>
          <Text className="text-secondary">user@example.com</Text>
        </Col>
      </Row>
      {menuArr.map((item, index) => (
        <Row
          key={index}
          align="middle"
          justify="center"
          className={'menu-item cursor-pointer mt-2 mx-2'}
          onClick={() => onMenuClick(item.path)}
        >
          <Col>
            <Text>{item.icon}</Text>
          </Col>
          <Col flex="auto">
            <Text className="px-3">{item.label}</Text>
          </Col>
        </Row>
      ))}
    </Card>
  );
}
