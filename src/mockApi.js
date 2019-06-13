
/* Array of data for each month */
const tcasData = [
  {
    name: "physic",
    data: [100,120,80,75,65,75,80,100,105,55,90,100]
  },
  {
    name: "math",
    data: [10,10,120,175,65,75,80,100,15,55,60,150]
  },
  {
    name: "chem",
    data: [70,120,40,100,25,75,80,70,55,100,20,100]
  }
]

const kengData = [
  {
    name: "physic",
    data: [40,30,20,15,50,60,70,30,20,50,60,40]
  },
  {
    name: "math",
    data: [60,20,10,30,50,60,70,30,20,50,40,70]
  },
  {
    name: "chem",
    data: [32,41,34,53,55,66,77,88,99,22,33,44]
  },
  {
    name: "bio",
    data: [12,34,56,78,90,22,33,55,11,23,45,42]
  }
]

const displayMap = {
  physic: 'ฟิสิกส์',
  chem: 'เคมี',
  bio: 'ชีววิทยา',
  math: 'คณิตศาสตร์'
}

const tcas = tcasData.map(item=> ({...item, display: displayMap[item.name] }))
const keng = kengData.map(item=> ({...item, display: displayMap[item.name] }))

export default { data: [tcas, keng] };