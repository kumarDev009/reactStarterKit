import React, { useState } from 'react';
import { Card, Typography, Avatar, Progress, Row, Col, Divider, Button } from 'antd';
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
import zoomPlugin from 'chartjs-plugin-zoom';

import CustomTitle from 'components/Title';
import { cards, chartComponents, chartData, chartOptions } from 'constants/dashboard';
import NivoChart from './Charts/NivoCharts';

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
  Legend,
  zoomPlugin
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
  const [hiddenData, setHiddenData] = useState({ line: [], bar: [] });

  const barChartRef = React.useRef();
  const lineChartRef = React.useRef();
  const pieChartRef = React.useRef();
  const doughnutChartRef = React.useRef();

  const resetZoom = chartRef => {
    if (chartRef && chartRef.current) {
      chartRef.current.resetZoom();
    }
  };

  const handleLegendClick = (type, id) => {
    setHiddenData(prevData => {
      if (prevData[type].includes(id)) {
        return {
          ...prevData,
          [type]: prevData[type].filter(currentId => currentId !== id)
        };
      } else {
        return {
          ...prevData,
          [type]: [...prevData[type], id]
        };
      }
    });
  };

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
            <Card
              title={<CustomTitle level={4}>{chart.title}</CustomTitle>}
              className="shadow-1 mb-2"
              extra={
                <Button
                  onClick={() => {
                    switch (chart.title) {
                      case 'Vertical Bar Chart':
                        resetZoom(barChartRef);
                        break;
                      case 'Line Chart':
                        resetZoom(lineChartRef);
                        break;
                      default:
                        break;
                    }
                  }}
                >
                  Reset Zoom
                </Button>
              }
            >
              <chart.component
                ref={
                  chart.title === 'Vertical Bar Chart'
                    ? barChartRef
                    : chart.title === 'Line Chart'
                    ? lineChartRef
                    : chart.title === 'Pie Chart'
                    ? pieChartRef
                    : doughnutChartRef
                }
                data={chartData}
                options={
                  chart.title === 'Pie Chart'
                    ? chartOptions.pie
                    : chart.title === 'Doughnut Chart'
                    ? chartOptions.doughnut
                    : chartOptions.default
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} className="mt-3 nivoChart">
        <Col span={12}>
          <Card title={<CustomTitle level={4}>Nivo Line Chart</CustomTitle>} className="shadow-1 mb-2">
            <div style={{ height: '400px' }}>
              <NivoChart type="line" hiddenData={hiddenData} handleLegendClick={handleLegendClick} />
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title={<CustomTitle level={4}>Nivo Bar Chart</CustomTitle>} className="shadow-1 mb-2">
            <div style={{ height: '400px' }}>
              <NivoChart type="bar" hiddenData={hiddenData} handleLegendClick={handleLegendClick} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
