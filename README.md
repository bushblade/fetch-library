## Simple http request library using the [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

closure based library

instantiate passing in a base url as first argument and any custom headers as the second argument.

```js
// with deno
import http from 'https://raw.githubusercontent.com/bushblade/fetch-library/master/index.js'
const api = http('https://jsonplaceholder.typicode.com')
```

Then use it

```js
api
  .get('/posts')
  .then(({ data }) => {
    console.log('got a response', data)
  })
  .catch(({ error, data }) => {
    console.log('caught an error', error, data)
  })
```

---

Each instance has methods for

- GET
- POST
- PUT
- DELETE

| request | method                  |
| ------- | ----------------------- |
| GET     | `.get(endPoint)`        |
| POST    | `.post(endPoint, body)` |
| PUT     | `.put(endPoint, body)`  |
| DELETE  | `.delete(endPoint)`     |
