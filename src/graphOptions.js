import goalData from './mockApi'
import COLORS from './configs/colors'
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
  physic: COLORS.SUBJECT_PHY,
  math: COLORS.SUBJECT_MATH,
  chem: COLORS.SUBJECT_CHEM,
  bio: COLORS.SUBJECT_BIO,
  goal: '#555555',
}

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
        color: color[sales.subjectCode],
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
      color: color.goal,
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
          Sales : <b>${this.y - this.series.yData[this.key - 1]}</b><br />
          Month : <b>${months[this.x]}</b><br />
          Total : <b>${toComma(this.y)}</b>
        `
    },
  },
}))

export default options
