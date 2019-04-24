## Simple http request library using the [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

There are two versions

### chttp.js

class based library

instantiate passing in a base url as first argument and any custom headers as the second argument.

```js
const http = new HTTP('https://jsonplaceholder.typicode.com')
```

Then use it

```js
http
  .get('/posts')
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

### ffhttp.js

Factory function based library

instantiate passing in a base url as first argument and any custom headers as the second argument.

```js
const http = easyHTTP('https://jsonplaceholder.typicode.com')
```

Then use it the same as the class version

```js
http
  .get('/posts')
  .then(res => console.log(res))
  .catch(err => console.log(err))
```
