/*  object of data each month and each course */
/* global DATA */
const data = DATA

const defaultConfigs = {
  graphName: '',
  salesGoal: 1000,
}

const configs = {
  tcas: {
    graphName: 'คอร์สพิชิต TCAS',
    salesGoal: 1000,
  },
  keng: {
    graphName: 'คอร์สเก่งม.ปลาย',
    salesGoal: 500,
  },
}

// Merge data to setting configs
export default Object.entries(data).map(([categoryKey, salesData]) => ({
  // set setting config for data if there isn't, set it to default config
  ...(configs[categoryKey] || defaultConfigs),
  data: salesData,
}))
