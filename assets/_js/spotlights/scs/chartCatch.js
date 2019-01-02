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
      type: 'column'
    },
    title: {
      x: 25,
      align: 'left',
      text: 'South China Sea Catch Estimates'
    },
    credits: {
      position: {
        y: -15
      },
      enabled: true,
      href: false,
      text: 'Vulcan'
    },
    yAxis: {
      title: { text: 'Catch Estimate (million metric tons)' },
      endOnTick: false
    },
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal',
      symbolRadius: 0
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

        console.log(percentOfSpratleys)
        return this.series.name.toLowerCase().indexOf(`catch`) < 0
          ? `${this.y} million metric tons`
          : `${percentOfSpratleys}% of catch in Spratlys`
      }
    }
  })
}

export default chartCatch
