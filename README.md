# sixit

Like `timeit` module in Python, run a function 6 times and return its average
elapsed time.

```js
import sixit from 'sixit'

function recur (x, y) {
  if (y > 0) return recur(x + y, y - 1)
  else return x
}

sixit(recur, 0, 100)
// recur: XXXms (sixit)
// => 5050
```

## TODO

* [ ] Text snippet
* [ ] `Promise` support
* [ ]  Handle callbacks

## License

ISC
