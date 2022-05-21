const convert = (from, to) => str => Buffer.from(str, from).toString(to)
const utf8ToHex = convert('utf8', 'hex')
const hexToUtf8 = convert('hex', 'utf8')

const a = utf8ToHex('hola') 
const b = hexToUtf8(a)
console.log(a)
console.log(b)