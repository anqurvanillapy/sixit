import assert from 'assert'
import { oneit, sixit } from './index.js'

class TestSixit {
  testIterativeFunction () {
    function sumIter (b, t) {
      for (let i = 1; i <= t; ++i) b += i
      return b
    }

    // XXX: Too much difference.
    assert(oneit(sumIter, 0, 900) === 405450)
    assert(sixit(sumIter, 0, 900) === 405450)
  }

  testRecursiveFunction () {
    function sumRecur (b, t) {
      if (t > 0) return sumRecur(b + t, t - 1)
      else return b
    }

    assert(oneit(sumRecur, 0, 900) === 405450)
    assert(sixit(sumRecur, 0, 900) === 405450)
  }
}

let tc = Reflect.ownKeys(TestSixit.prototype)
let ntc = tc.length
let passed = 0

process.stdout.write('\n')
console.time('elapsed')

for (let i = 0; i < ntc; ++i) {
  let m = tc[i]

  if (m !== 'constructor') {
    process.stdout.write(`[test] #${i} ${m} ...`)
    try {
      TestSixit.prototype[m]()
      console.log('️ \x1b[32m✔️\x1b[0m')
      ++passed
    } catch (err) {
      console.error(err)
      console.log(' \x1b[31m✖️\x1b[0m')
    }
  }
}

process.stdout.write('\n')
console.timeEnd('elapsed')
console.log(`${passed} / ${ntc - 1} passed...`) // excludes constructor
