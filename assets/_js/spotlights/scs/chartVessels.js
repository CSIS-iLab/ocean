import Highcharts from 'Highcharts'

const chartVessels = () => {
  let data = {}

  Highcharts.data({
    googleSpreadsheetKey: '1gzVjCcfEK2nBXQp2w5HCm4ZRH288X7WJVG9oPqsdEP8',
    googleSpreadsheetWorksheet: 1,
    switchRowsAndColumns: true,
    parsed: function(columns) {
      columns.forEach((code, i) => {
        if (i == 0) {
          return
        }
        data.subi = data.subi || {}
        data.subi.name = 'Subi Reef'
        data.subi.data = data.subi.data || []

        if (code[1]) {
          data.subi.data.push({ x: new Date(code[0]), y: code[1] })
        }

        data.mischief = data.mischief || {}
        data.mischief.name = 'Mischief Reef'
        data.mischief.data = data.mischief.data || []
        if (code[2]) {
          data.mischief.data.push({ x: new Date(code[0]), y: code[2] })
        }
      })

      let dataArray = Object.values(data).map((value, index) => {
        return value
      })
      renderChart(dataArray)
    }
  })

  function renderChart(dataArray) {
    Highcharts.chart('chartVessels', {
      chart: {
        styledMode: true,
        zoomType: false
      },
      title: {
        x: 25,
        align: 'left',
        text: 'Vessel Presence in Subi Reef and Mischief Reef'
      },
      credits: {
        enabled: true,
        href: false,
        text:
          'Developed based on information or analysis provided by Vulcan Technologies LLC.'
      },
      legend: {
        align: 'left',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        symbolRadius: 0,
        squareSymbol: true,
        title: {
          text:
            '<span style="font-size: 10px; color: #808080; font-weight: normal">Click to hide</span>'
        }
      },
      tooltip: {
        headerFormat: `<span style="font-size: 10px;color:{point.color}">⬤ </span>   <b>{point.series.name}</b><br/>`,
        pointFormatter: function() {
          let date = new Date(this.x).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })

          return `${date}: ${this.y} vessels`
        }
      },
      yAxis: {
        title: { text: 'Vessel Count' },
        endOnTick: false,
        tickInterval: 50
      },
      xAxis: {
        type: 'datetime'
      },
      series: [
        {
          type: 'column',
          name: dataArray[0].name,
          data: dataArray[0].data,
          borderWidth: 0,
          borderRadius: 3,
          className: 'highcharts-series-subi-column',
          color: '#EB9B8D',
          events: {
            legendItemClick: function(e) {
              let match = this.chart.series.find(
                s => s.name === this.name && s.userOptions.type === 'area'
              )
              match.visible ? match.hide() : match.show()
            }
          }
        },
        {
          type: 'column',
          name: dataArray[1].name,
          data: dataArray[1].data,
          borderWidth: 0,
          borderRadius: 3,
          className: 'highcharts-series-mischief-column',
          color: '#0663a1',
          events: {
            legendItemClick: function(e) {
              let match = this.chart.series.find(
                s => s.name === this.name && s.userOptions.type === 'area'
              )
              match.visible ? match.hide() : match.show()
            }
          }
        },
        {
          type: 'area',
          name: dataArray[0].name,
          showInLegend: false,
          data: dataArray[0].data,
          className: 'highcharts-series-subi-area',
          color: '#0663a1'
        },
        {
          type: 'area',
          name: dataArray[1].name,
          data: dataArray[1].data,
          showInLegend: false,
          className: 'highcharts-series-mischief-area',
          color: '#EB9B8D'
        }
      ],
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
              }
            }
          }
        ]
      }
    })
  }
}
export default chartVessels
