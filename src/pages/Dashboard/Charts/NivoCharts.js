import React from 'react';
import { useOrdinalColorScale } from '@nivo/colors';
import { data as nivoChartData, chartConfig } from 'constants/dashboard';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

const chartComponents = {
  Bar: ResponsiveBar,
  Line: ResponsiveLine
};

const NivoChart = ({ type, hiddenData, handleLegendClick }) => {
  const config = { ...chartConfig[type] };
  const ChartComponent = chartComponents[config.component];
  const colors = useOrdinalColorScale({ scheme: 'nivo' }, 'id');
  const foodKeys = ['burger', 'sandwich', 'kebab', 'fries', 'donut'];

  if (type === 'bar') {
    config.data = config.data.map(item => {
      let newItem = { ...item };
      config.keys.forEach(key => {
        if (hiddenData.bar.includes(key)) {
          newItem[key] = null;
        }
      });
      return newItem;
    });
    config.legends[0].data = foodKeys.map(key => ({
      color: hiddenData.bar.includes(key) ? 'rgba(1, 1, 1, .1)' : `${config.data[0][`${key}Color`]} `,
      id: key,
      label: key
    }));
    config.legends[0].onClick = datum => handleLegendClick('bar', datum.id);
  } else if (type === 'line') {
    config.data = nivoChartData.filter(d => !hiddenData.line.includes(d.id));
    config.legends[0].data = nivoChartData.map(item => {
      const color = colors(item);
      return {
        color: hiddenData.line.includes(item.id) ? 'rgba(1, 1, 1, .1)' : color,
        id: item.id,
        label: item.id
      };
    });
    config.legends[0].onClick = data => handleLegendClick('line', data.id);
  }

  return <ChartComponent {...config} />;
};

export default NivoChart;
