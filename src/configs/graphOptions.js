import COLORS from './colors'
import goalData from './data'
import { toComma } from '../utils'

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

const COLOR = {
  PHY: COLORS.SUBJECT_PHY,
  MATH: COLORS.SUBJECT_MATH,
  CHEM: COLORS.SUBJECT_CHEM,
  BIO: COLORS.SUBJECT_BIO,
  goal: '#555555',
}
console.log(goalData)
const options = goalData.map(goal => ({
  name: goal.graphName,
  title: {
    text: goal.graphName,
  },
  chart: {
    style: {
      fontFamily: 'KaLaTeXaDisplay',
    },
  },
  xAxis: {
    tickInterval: 1,
    labels: {
      enabled: true,
      // change array number to month
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
  // set series sales in 1 year
  series: [
    // add all goal data to array
    ...goal.data.map(sales => {
      let seriesSum = 0
      return {
        name: sales.name,
        color: COLOR[sales.subjectCode],
        // sum of previous sum and current value to show current sales
        data: sales.data.map(val => {
          seriesSum += val
          return seriesSum
        }),
      }
    }),
    // add trend line of goal concat with data
    {
      type: 'line',
      name: 'เป้าหมาย',
      color: COLOR.goal,
      dashStyle: 'dash',
      marker: { enabled: false },
      enableMouseTracking: false,
      // create new array length = month and add value from calculated sales goal
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
          Sales : <b>${this.y - this.series.yData[this.key - 1] || this.y}</b><br />
          Month : <b>${months[this.x]}</b><br />
          Total : <b>${toComma(this.y)}</b>
        `
    },
  },
}))

export default options
