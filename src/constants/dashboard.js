import { TwitterOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

//Chart JS constants
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
  default: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy'
        },
        zoom: {
          enabled: true,
          mode: 'xy',
          drag: true,
          wheel: {
            enabled: true
          },
          pinch: {
            enabled: true
          },
          limits: {
            x: { min: 0, max: 100 },
            y1: { min: 50, max: 80 },
            y2: { min: 0.1, max: 0.8 }
          }
        }
      }
    }
  },
  pie: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  },
  doughnut: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
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

//Nivo Constants
export const data = [
  {
    id: 'japan',
    color: 'hsl(310, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 282
      },
      {
        x: 'helicopter',
        y: 163
      },
      {
        x: 'boat',
        y: 173
      },
      {
        x: 'train',
        y: 245
      },
      {
        x: 'subway',
        y: 140
      },
      {
        x: 'bus',
        y: 264
      },
      {
        x: 'car',
        y: 21
      },
      {
        x: 'moto',
        y: 196
      },
      {
        x: 'bicycle',
        y: 90
      },
      {
        x: 'horse',
        y: 296
      },
      {
        x: 'skateboard',
        y: 225
      },
      {
        x: 'others',
        y: 77
      }
    ]
  },
  {
    id: 'france',
    color: 'hsl(212, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 175
      },
      {
        x: 'helicopter',
        y: 128
      },
      {
        x: 'boat',
        y: 24
      },
      {
        x: 'train',
        y: 210
      },
      {
        x: 'subway',
        y: 197
      },
      {
        x: 'bus',
        y: 67
      },
      {
        x: 'car',
        y: 69
      },
      {
        x: 'moto',
        y: 216
      },
      {
        x: 'bicycle',
        y: 138
      },
      {
        x: 'horse',
        y: 50
      },
      {
        x: 'skateboard',
        y: 270
      },
      {
        x: 'others',
        y: 56
      }
    ]
  },
  {
    id: 'us',
    color: 'hsl(195, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 52
      },
      {
        x: 'helicopter',
        y: 5
      },
      {
        x: 'boat',
        y: 242
      },
      {
        x: 'train',
        y: 267
      },
      {
        x: 'subway',
        y: 228
      },
      {
        x: 'bus',
        y: 295
      },
      {
        x: 'car',
        y: 126
      },
      {
        x: 'moto',
        y: 156
      },
      {
        x: 'bicycle',
        y: 177
      },
      {
        x: 'horse',
        y: 51
      },
      {
        x: 'skateboard',
        y: 283
      },
      {
        x: 'others',
        y: 294
      }
    ]
  },
  {
    id: 'germany',
    color: 'hsl(264, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 170
      },
      {
        x: 'helicopter',
        y: 134
      },
      {
        x: 'boat',
        y: 101
      },
      {
        x: 'train',
        y: 10
      },
      {
        x: 'subway',
        y: 192
      },
      {
        x: 'bus',
        y: 230
      },
      {
        x: 'car',
        y: 146
      },
      {
        x: 'moto',
        y: 244
      },
      {
        x: 'bicycle',
        y: 112
      },
      {
        x: 'horse',
        y: 15
      },
      {
        x: 'skateboard',
        y: 143
      },
      {
        x: 'others',
        y: 86
      }
    ]
  },
  {
    id: 'norway',
    color: 'hsl(111, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 139
      },
      {
        x: 'helicopter',
        y: 25
      },
      {
        x: 'boat',
        y: 199
      },
      {
        x: 'train',
        y: 29
      },
      {
        x: 'subway',
        y: 116
      },
      {
        x: 'bus',
        y: 142
      },
      {
        x: 'car',
        y: 37
      },
      {
        x: 'moto',
        y: 256
      },
      {
        x: 'bicycle',
        y: 31
      },
      {
        x: 'horse',
        y: 131
      },
      {
        x: 'skateboard',
        y: 279
      },
      {
        x: 'others',
        y: 81
      }
    ]
  }
];

export const barChartData = [
  {
    country: 'AD',
    'hot dogColor': 'hsl(349, 70%, 50%)',
    burger: 31,
    burgerColor: 'rgb(232,193,160)',
    sandwich: 167,
    sandwichColor: 'rgb(244,117,96)',
    kebab: 52,
    kebabColor: 'rgb(136,127,51)',
    fries: 144,
    friesColor: 'rgb(232, 168, 56)',
    donut: 34,
    donutColor: 'rgb(97,205,187)'
  },
  {
    country: 'AE',
    'hot dogColor': 'hsl(291, 70%, 50%)',
    burger: 142,
    burgerColor: 'hsl(340, 70%, 50%)',
    sandwich: 151,
    sandwichColor: 'hsl(144, 70%, 50%)',
    kebab: 40,
    kebabColor: 'hsl(190, 70%, 50%)',
    fries: 108,
    friesColor: 'hsl(67, 70%, 50%)',
    donut: 47,
    donutColor: 'hsl(242, 70%, 50%)'
  },
  {
    country: 'AF',
    'hot dogColor': 'hsl(135, 70%, 50%)',
    burger: 124,
    burgerColor: 'hsl(112, 70%, 50%)',
    sandwich: 40,
    sandwichColor: 'hsl(175, 70%, 50%)',
    kebab: 65,
    kebabColor: 'hsl(12, 70%, 50%)',
    fries: 6,
    friesColor: 'hsl(3, 70%, 50%)',
    donut: 44,
    donutColor: 'hsl(254, 70%, 50%)'
  },
  {
    country: 'AG',
    'hot dogColor': 'hsl(251, 70%, 50%)',
    burger: 159,
    burgerColor: 'hsl(248, 70%, 50%)',
    sandwich: 50,
    sandwichColor: 'hsl(91, 70%, 50%)',
    kebab: 113,
    kebabColor: 'hsl(36, 70%, 50%)',
    fries: 164,
    friesColor: 'hsl(258, 70%, 50%)',
    donut: 120,
    donutColor: 'hsl(216, 70%, 50%)'
  },
  {
    country: 'AI',
    'hot dogColor': 'hsl(19, 70%, 50%)',
    burger: 158,
    burgerColor: 'hsl(82, 70%, 50%)',
    sandwich: 143,
    sandwichColor: 'hsl(143, 70%, 50%)',
    kebab: 173,
    kebabColor: 'hsl(311, 70%, 50%)',
    fries: 199,
    friesColor: 'hsl(98, 70%, 50%)',
    donut: 176,
    donutColor: 'hsl(252, 70%, 50%)'
  },
  {
    country: 'AL',
    'hot dogColor': 'hsl(132, 70%, 50%)',
    burger: 98,
    burgerColor: 'hsl(124, 70%, 50%)',
    sandwich: 121,
    sandwichColor: 'hsl(66, 70%, 50%)',
    kebab: 119,
    kebabColor: 'hsl(310, 70%, 50%)',
    fries: 29,
    friesColor: 'hsl(94, 70%, 50%)',
    donut: 180,
    donutColor: 'hsl(324, 70%, 50%)'
  },
  {
    country: 'AM',
    'hot dogColor': 'hsl(131, 70%, 50%)',
    burger: 21,
    burgerColor: 'hsl(200, 70%, 50%)',
    sandwich: 105,
    sandwichColor: 'hsl(341, 70%, 50%)',
    kebab: 27,
    kebabColor: 'hsl(42, 70%, 50%)',
    fries: 29,
    friesColor: 'hsl(208, 70%, 50%)',
    donut: 55,
    donutColor: 'hsl(40, 70%, 50%)'
  }
];

export const chartConfig = {
  bar: {
    component: 'Bar',
    title: 'Nivo Bar Chart',
    data: barChartData,
    keys: ['burger', 'sandwich', 'kebab', 'fries', 'donut'],
    indexBy: 'country',
    margin: { top: 45, right: 20, bottom: 50, left: 60 },
    padding: 0.3,
    valueScale: { type: 'linear' },
    indexScale: { type: 'band', round: true },
    colors: { scheme: 'nivo' },
    borderColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    },
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    labelTextColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    legends: [
      {
        dataFrom: 'keys',
        anchor: 'top',
        direction: 'row',
        translateY: -41,
        itemWidth: 70,
        itemsSpacing: 10,
        itemHeight: 10,
        symbolSize: 20,
        symbolShape: 'circle',
        itemDirection: 'left-to-right',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ],
    role: 'application',
    ariaLabel: 'Nivo bar chart demo',
    barAriaLabel: e => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
  },
  line: {
    component: 'Line',
    title: 'Nivo Line Chart',
    data: data,
    margin: { top: 45, right: 20, bottom: 50, left: 60 },
    xScale: { type: 'point' },
    yScale: { type: 'linear', stacked: true, min: 'auto', max: 'auto' },
    yFormat: ' >-.2f',
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -39,
      legend: 'transportation',
      legendOffset: 46,
      legendPosition: 'middle'
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle'
    },
    pointSize: 10,
    pointColor: { theme: 'background' },
    pointBorderWidth: 2,
    pointBorderColor: { from: 'serieColor' },
    pointLabelYOffset: -12,
    useMesh: true,
    legends: [
      {
        anchor: 'top',
        direction: 'row',
        translateY: -41,
        itemWidth: 70,
        itemsSpacing: 10,
        itemHeight: 10,
        symbolSize: 20,
        symbolShape: 'circle',
        itemDirection: 'left-to-right'
      }
    ],
    enableArea: true,
    enableGridX: false
  }
};
