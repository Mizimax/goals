/*  object of data each month and each course */
const data = {
  tcas: [
    {
      subjectCode: 'PHY',
      name: 'ฟิสิกส์',
      data: [100, 120, 80, 75, 65, 75, 80, 100, 105, 55, 90, 100],
    },
    {
      subjectCode: 'MATH',
      name: 'คณิตศาสตร์',
      data: [10, 10, 120, 175, 65, 75, 80, 100, 15, 55, 60, 150],
    },
    {
      subjectCode: 'CHEM',
      name: 'เคมี',
      data: [70, 120, 40, 100, 25, 75, 80, 70, 55, 100, 20, 100],
    },
  ],
  keng: [
    {
      subjectCode: 'PHY',
      name: 'ฟิสิกส์',
      data: [40, 30, 20, 15, 50, 60, 70, 30, 20, 50, 60, 40],
    },
    {
      subjectCode: 'MATH',
      name: 'คณิตศาสตร์',
      data: [60, 20, 10, 30, 50, 60, 70, 30, 20, 50, 40, 70],
    },
    {
      subjectCode: 'CHEM',
      name: 'เคมี',
      data: [32, 41, 34, 53, 55, 66, 77, 88, 99, 22, 33, 44],
    },
    {
      subjectCode: 'BIO',
      name: 'ชีวะ',
      data: [12, 34, 56, 78, 90, 22, 33, 55, 11, 23, 45, 42],
    },
  ],
}

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
