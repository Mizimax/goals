/**
 * Change number format to thousand comma seperate
 * @param {Number, String} num
 * @returns {string}
 */
export const toComma = num => {
  let result = num
  if (typeof num === 'string') result = parseInt(num, 10)
  else if (typeof num !== 'number') throw new Error('Number, String format only')
  return result.toLocaleString('en')
}
