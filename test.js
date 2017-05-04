import assert from 'assert'
import sixit from './index.js'

class TestSixit {
  testFunctionElapsed () {
    process.stdout.write('record function elapsed time...')
  }
}

let tc = Reflect.ownKeys(TestSixit.prototype)
let ntc = tc.length
let passed = 0

for (let i = 0; i < ntc; ++i) {
  let m = tc[i]
  if (m !== 'constructor') {
    process.stdout.write('[test] ')
    try {
      TestSixit.prototype[m]()
      console.log('️ \x1b[32m✔️\x1b[0m')
      ++passed
    } catch (err) {
      console.log(' x1b[35m✖️\x1b[0m')
    }
  }
}

console.log(`\n${passed} / ${ntc - 1} passed...`) // excludes constructor
