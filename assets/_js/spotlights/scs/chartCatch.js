import Highcharts from 'Highcharts'

const chartCatch = () => {
  Highcharts.chart('chartCatch', {
    data: {
      googleSpreadsheetKey: '1c-2HYrSMh1HeQHR93kq2RjRzB2Bf1s3gpV-NYuh7zq4',
      googleSpreadsheetWorksheet: 1,
      switchRowsAndColumns: true
    },
    chart: {
      zoomType: false,
      type: 'column',
      height: '500px'
    },
    title: {
      // x: 25,
      align: 'left',
      text: 'Estimated Chinese Annual Fishing Capacity in Spratly Islands'
    },
    subtitle: {
      align: 'left',
      text:
        "The Spratly Island values represent 12% of the entire South China Sea estimated fishing capacity, estimated to range between 10 and 20 million tons."
    },
    credits: {
      enabled: true,
      href: false,
      text:
        'Developed based on information or analysis provided by Vulcan Technologies LLC.'
    },
    yAxis: {
      title: {
        text: 'Fishing Capacity (million tons)'
      },
      endOnTick: false
    },
    legend: {
      align: 'left',
      verticalAlign: 'bottom',
      layout: 'horizontal',
      symbolRadius: 0,
      title: {
        text:
          '<span style="font-size: 10px; color: #808080; font-weight: normal">Click to hide</span>'
      }
    },
    plotOptions: {
      column: {
        groupPadding: 0.5,
        pointWidth: 150,
        borderWidth: 0
      }
    },
    series: [
      {
        className: 'highcharts-series-scs',
        color: '#82c0de'
      },
      {
        className: 'highcharts-series-spratly',
        color: {
          pattern: {
            color: '#0663a1',
            path: {
              d: 'M 0 0 L 3 3'
            },
            width: 5,
            height: 5,
            opacity: 1
          }
        }
      },
      {
        className: 'highcharts-series-china',
        color: {
          pattern: {
            color: '#ef4723',
            path: {
              d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
              strokeWidth: 3
            },
            width: 10,
            height: 10,
            opacity: 0.6
          }
        }
      }
    ],
    tooltip: {
      headerFormat: `<b>{point.series.name}</b><br/>`,
      pointFormatter: function() {
        let spratlys = this.series.chart.series[1].data[this.index].options.y

        let percentOfSpratleys = (this.y / spratlys) * 100

        return this.series.name.toLowerCase().indexOf(`catch`) < 0
          ? `${this.y} million tons`
          : `${percentOfSpratleys}% of catch in Spratlys`
      }
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 400,
            minWidth: 250
          },
          chartOptions: {
            chart: {
              spacingBottom: 15
            },
            legend: {
              y: -15
            },
            credits: {
              style: {
                width: 200
              },
              position: {
                align: 'right',
                y: -15
              }
            },
            plotOptions: {
              column: {
                pointWidth: 90
              }
            }
          }
        },
        {
          condition: {
            minWidth: 400
          },
          chartOptions: {
            plotOptions: {
              column: {
                pointWidth: 150
              }
            }
          }
        }
      ]
    }
  })
}

export default chartCatch
