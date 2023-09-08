import { TwitterOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

export const cards = [
  {
    name: 'Cameron Williamson',
    role: 'Marketing Coordinator',
    progressData: [
      { platform: 'Twitter', percentage: 34, color: 'rgb(6,182,212)', icon: <TwitterOutlined /> },
      { platform: 'Facebook', percentage: 45.86, color: '#6366F1', icon: <FacebookOutlined /> },
      { platform: 'Google', percentage: 79, color: '#F97316', icon: <GoogleOutlined /> }
    ]
  },
  {
    name: 'Kathryn Murphy',
    role: 'Sales Manager',
    progressData: [
      { platform: 'Twitter', percentage: 23.55, color: 'rgb(6,182,212)', icon: <TwitterOutlined /> },
      { platform: 'Facebook', percentage: 78.65, color: '#6366F1', icon: <FacebookOutlined /> },
      { platform: 'Google', percentage: 86.54, color: '#F97316', icon: <GoogleOutlined /> }
    ]
  },
  {
    name: 'Darrell Steward',
    role: 'Web Designer',
    progressData: [
      { platform: 'Twitter', percentage: 64.47, color: 'rgb(6,182,212)', icon: <TwitterOutlined /> },
      { platform: 'Facebook', percentage: 75.67, color: '#6366F1', icon: <FacebookOutlined /> },
      { platform: 'Google', percentage: 45, color: '#F97316', icon: <GoogleOutlined /> }
    ]
  }
];

export const chartComponents = [
  { title: 'Vertical Bar Chart', component: Bar },
  { title: 'Line Chart', component: Line },
  { title: 'Pie Chart', component: Pie },
  { title: 'Doughnut Chart', component: Doughnut }
];

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const chartData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ]
    },
    {
      label: 'Dataset 2',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ]
    }
  ]
};
