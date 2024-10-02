// not work
import { readSync } from 'fs'

function getChar() {
  let buffer = Buffer.alloc(1)
  readSync(0, buffer, 0, 1)
  return buffer.toString('utf8')
}

console.log(getChar())
console.log(getChar())
console.log(getChar())
