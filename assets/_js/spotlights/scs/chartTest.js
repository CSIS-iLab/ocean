import Highcharts from 'Highcharts'

const chartTest = () => {
  Highcharts.chart('chartTest', {
    chart: {
      styledMode: true,
      type: 'column'
    },

    title: {
      text: 'Styling axes'
    },

    subtitle: {
      text: '..and subtitle'
    },

    yAxis: [
      {
        className: 'highcharts-color-0',
        title: {
          text: 'Primary axis'
        }
      },
      {
        className: 'highcharts-color-1',
        opposite: true,
        title: {
          text: 'Secondary axis'
        }
      }
    ],

    plotOptions: {
      column: {
        borderRadius: 5
      }
    },

    series: [
      {
        data: [
          {
            y: 100,
            dataLabels: {
              enabled: true,
              y: -10,
              rotation: 45,
              shape: null
            }
          },
          {
            y: 300,
            dataLabels: {
              enabled: true,
              borderRadius: 2,
              y: -20,
              x: -10,
              shape: 'callout'
            }
          },
          {
            y: 500,
            dataLabels: {
              className: 'highlight'
            }
          },
          {
            y: 400
          }
        ]
      },
      {
        data: [324, 124, 547, 221],
        yAxis: 1
      }
    ]
  })
}
export default chartTest
