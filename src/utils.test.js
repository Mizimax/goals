import { toComma } from './utils'

it('sums numbers', () => {
  expect(toComma(-1000)).toEqual('-1,000')
  expect(toComma(-1)).toEqual('-1')
  expect(toComma(0)).toEqual('0')
  expect(toComma(100)).toEqual('100')
  expect(toComma(1000)).toEqual('1,000')
  expect(toComma('1000')).toEqual('1,000')
  expect(toComma(1000000)).toEqual('1,000,000')
  // it("Throw Error Invalid Data", () =>{
  //   return expect(toComma({})).rejects.toEqual(new Error('Number, String format only'));
  // })
})
