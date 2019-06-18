import { toComma } from './utils'

const specs = [
  {
    args: {
      num: -1000,
    },
    result: '-1,000',
  },
  {
    args: {
      num: -1,
    },
    result: '-1',
  },
  {
    args: {
      num: 0,
    },
    result: '0',
  },
  {
    args: {
      num: 100,
    },
    result: '100',
  },
  {
    args: {
      num: 1000,
    },
    result: '1,000',
  },
  {
    args: {
      num: '1000',
    },
    result: '1,000',
  },
  {
    args: {
      num: 1000000,
    },
    result: '1,000,000',
  },
]

const failSpec = [
  {
    args: {
      num: {},
    },
    result: 'Number, String format only',
  },
]

describe(`toComma(num) : num(Number,String)`, () => {
  specs.forEach(({ args, result }) => {
    it(`should return ${JSON.stringify(result)}, when passing props: ${JSON.stringify(
      args.num
    )}`, () => {
      expect(toComma(args.num)).toBe(result)
    })
  })
  failSpec.forEach(({ args, result }) => {
    it(`should throw Error(${result}), when passing props: ${args.num}`, () => {
      expect(() => toComma(args.num)).toThrow(result)
    })
  })
})
