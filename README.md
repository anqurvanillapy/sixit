# sixit

Like `timeit` module in Python, run a function 6 times and return its average
elapsed time.

```js
import sixit from 'sixit'

function foo () {
  let a = 0
  for (let i = 0; i < 1000000; ++i) a += i
  return a
}

sixit.sixit(foo)
// => prints its average execution time
```

## TODO

* [ ] Text snippet
* [ ] `Promise` support
* [ ]  Handle callbacks

## License

ISC
