## Simple http request library using the [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

closure based library

instantiate passing in a base url as first argument and any custom headers as the second argument.

```js
const http = easyHTTP('https://jsonplaceholder.typicode.com')
```

Then use it

```js
easyHTTP
  .get('/posts')
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

---

Each instance has methods for

- GET
- POST
- PUT
- DELETE

| request | method             |
| ------- | ------------------ |
| GET     | `.get(url)`        |
| POST    | `.post(url, data)` |
| PUT     | `.put(url, data)`  |
| DELETE  | `.delete(url)`     |
