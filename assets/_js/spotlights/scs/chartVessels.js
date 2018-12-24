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
        text:
          'Vessel presence in Subi Reef and Mischief Reef has spiked to unprecedented levels'
      },
      subtitle: {
        x: 25,
        align: 'left',
        text:
          'About 300 vessels were in Subi and Mischief Reef in August. Over 90% are fishing vessels, average size 51 meters'
      },
      credits: {
        position: {
          y: -15
        },
        enabled: true,
        href: false,
        text: 'Vulcan'
      },
      legend: {
        y: -15,
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        symbolHeight: 2,
        symbolWidth: 16,
        squareSymbol: false
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
        type: 'datetime',

        labels: {
          formatter: function(d) {
            let date = new Date(d.value).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })

            return date
          }
        }
      },
      series: [
        {
          type: 'column',
          name: dataArray[0].name,
          data: dataArray[0].data,
          borderWidth: 0,
          className: 'highcharts-series-subi-column',
          color: '#f7941d'
        },
        {
          type: 'column',
          name: dataArray[1].name,
          data: dataArray[1].data,
          borderWidth: 0,
          className: 'highcharts-series-mischief-column',
          color: '#8dc540'
        },
        {
          type: 'area',
          name: dataArray[0].name,
          showInLegend: false,
          data: dataArray[0].data,
          className: 'highcharts-series-subi-area',
          color: '#f7941d'
        },
        {
          type: 'area',
          name: dataArray[1].name,
          data: dataArray[1].data,
          showInLegend: false,
          className: 'highcharts-series-mischief-area',
          color: '#8dc540'
        }
      ]
    })
  }
}
export default chartVessels
