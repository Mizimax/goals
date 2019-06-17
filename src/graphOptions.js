import goalData from './mockApi'
import colors from './configs/colors'
import { toComma } from './utils'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const color = {
  physic: colors.SUBJECT_PHY,
  math: colors.SUBJECT_MATH,
  chem: colors.SUBJECT_CHEM,
  bio: colors.SUBJECT_BIO,
  goal: '#555555',
}

const options = goalData.map(goal => ({
  name: goal.graphName,
  title: {
    text: goal.graphName,
  },
  xAxis: {
    tickInterval: 1,
    labels: {
      enabled: true,
      formatter() {
        return months[this.value]
      },
    },
  },
  yAxis: {
    tickInterval: 200,
    title: {
      text: 'Sales',
    },
    labels: {
      format: '{value:,.0f}',
    },
  },
  series: [
    ...goal.data.map(sales => {
      let seriesSum = 0
      return {
        name: sales.name,
        color: color[sales.subjectCode],
        data: sales.data.map(val => {
          seriesSum += val
          return seriesSum
        }),
      }
    }),
    {
      type: 'line',
      name: 'เป้าหมาย',
      color: color.goal,
      dashStyle: 'dash',
      marker: { enabled: false },
      enableMouseTracking: false,
      data: Array.from(
        Array(months.length),
        (val, index) => ((index + 1) * goal.salesGoal) / months.length
      ),
    },
  ],
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },
  tooltip: {
    formatter() {
      return `
          <b>${this.series.name}</b><br />
          Sales : <b>${this.y - this.series.yData[this.key - 1]}</b><br />
          Month : <b>${months[this.x]}</b><br />
          Total : <b>${toComma(this.y)}</b>
        `
    },
  },
}))

export default options
