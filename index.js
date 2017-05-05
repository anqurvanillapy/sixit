function preassert (f) {
  if (typeof f !== 'function') throw TypeError(`${f.name} is not a function`)
}

function oneit (f, ...args) {
  preassert(f)
  let ret
  let fname = f.name

  console.time(fname)
  ret = f(...args)
  console.timeEnd(fname)
  return ret
}

function sixit (f, ...args) {
  preassert(f)
  let ms = 0
  let start, end
  let ret = f(...args)

  start = process.hrtime()
  // It is fine, although not cool at all.
  f(...args)
  f(...args)
  f(...args)
  f(...args)
  f(...args)
  f(...args)
  end = process.hrtime(start)
  ms += end[0] * 1000.0 + end[1] / 1000000.0  // [sec, nanosec]

  console.log(`${f.name}: ${ms / 6.0}ms (sixit)`)
  return ret
}

export { oneit, sixit }
