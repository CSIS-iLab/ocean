import Highcharts from 'Highcharts'

const chartVessels = () => {
  console.log(Highcharts)
  let chart = Highcharts.chart('chartVessels', {
    data: {
      googleSpreadsheetKey: '1gzVjCcfEK2nBXQp2w5HCm4ZRH288X7WJVG9oPqsdEP8',
      googleSpreadsheetWorksheet: 1
    },
    chart: {
      type: 'area'
    },
    title: {
      text: 'Industrial Robot Purchases (2008-2017)'
    },
    credits: {
      enabled: true,
      href: false,
      text:
        "CSIS China Power Project | Source: <a href='https://ifr.org/'>International Federation of Robotics</a>"
    },
    legend: {
      title: {
        text:
          '<span style="font-size: 12px; color: #808080; font-weight: normal">(Click to hide)</span>'
      },
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    xAxis: {
      allowDecimals: false
    },
    yAxis: {
      title: {
        text: 'Units Purchased'
      },
      labels: {
        format: '{value}k'
      }
    },
    tooltip: {
      headerFormat:
        '<span style="color:{point.color};"> \u25CF </span> <b>{point.series.name} </b><br/>',
      pointFormat:
        '<span style="font-weight: bold;">{point.x}</span>: {point.y}k units'
    },
    plotOptions: {
      series: {
        connectNulls: true
      },
      area: {
        stacking: 'normal',
        connectNulls: true,
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      }
    }
  })
}
export default chartVessels
