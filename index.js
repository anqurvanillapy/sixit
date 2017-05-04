export default class sixit {
  sixit (f) {
    if (typeof f !== 'function') throw TypeError(`${f.name} is not a function`)

    console.time(f.name)
    let ret = f()
    console.timeEnd()
    return ret
  }
}
