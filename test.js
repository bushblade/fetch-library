import http from './index.js'

// Bad response API
const api = http('https://run.mocky.io/v3/7d8c436e-d1dc-4857-b0ac-7e3e8047aef8')

// good response API
// const api = http('https://jsonplaceholder.typicode.com')

api
  .get('/posts/1')
  .then(({ data }) => {
    console.log('✅ Got a good response:-\n', data)
  })
  .catch(({ error, data }) => {
    console.error('❌ Got a bad response:-\n', error, data)
  })
