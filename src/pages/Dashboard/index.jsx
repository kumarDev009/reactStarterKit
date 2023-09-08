import React from 'react';
import { Card, Typography, Avatar, Progress, Row, Col, Divider } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title as ChartTitle,
  Tooltip,
  Legend
} from 'chart.js';

import CustomTitle from 'components/Title';
import { cards, chartComponents, chartData, chartOptions } from 'constants/dashboard';

const { Text } = Typography;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  ChartTitle,
  Tooltip,
  Legend
);

const ProgressBarSection = ({ icon, platform, percentage, color }) => (
  <>
    <Row justify="space-between" align="middle" className="mb-2">
      <Col>
        <Row align="middle">
          {React.cloneElement(icon, { className: 'fs-5' })}
          <Text className="ms-2">{platform}</Text>
        </Row>
      </Col>
      <Col>
        <Text>{percentage}%</Text>
      </Col>
    </Row>
    <Progress percent={percentage} showInfo={false} strokeColor={color} />
  </>
);

const ProgressCard = ({ name, role, progressData }) => (
  <Card className="shadow-1">
    <Row gutter={16}>
      <Col>
        <Avatar size={64} />
      </Col>
      <Col>
        <CustomTitle level={4}>{name}</CustomTitle>
        <Text>{role}</Text>
      </Col>
    </Row>
    <Divider className="mt-3 mb-3" />
    {progressData.map((data, idx) => (
      <ProgressBarSection key={idx} {...data} />
    ))}
  </Card>
);

export default function Dashboard() {
  return (
    <div className="p-3">
      <CustomTitle level={3}>Progress Bars</CustomTitle>
      <Row gutter={[16, 16]}>
        {cards.map((card, idx) => (
          <Col key={idx} xs={24} sm={12} md={8}>
            <ProgressCard {...card} />
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} className="mt-4">
        {chartComponents.map((chart, idx) => (
          <Col key={idx} xs={24} sm={12}>
            <Card title={<CustomTitle level={4}>{chart.title}</CustomTitle>} className="shadow-1 mb-2">
              <chart.component data={chartData} options={chartOptions} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
