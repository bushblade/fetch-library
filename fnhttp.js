const sharedFetch = async (state, method, url, data = null) => {
  const config = {
    method,
    headers: state.headers
  }
  if (data) config.body = JSON.stringify(data)
  const response = await fetch(`${state.baseUrl}${url}`, config).then(res => {
    if (!res.ok) throw Error(`${res.status} message: ${res.statusText}`)
    return res.json()
  })
  return response
}

const _get = state => ({
  get: url => sharedFetch(state, 'GET', url)
})

const _post = state => ({
  post: (url, data) => sharedFetch(state, 'POST', url, data)
})

const _put = state => ({
  put: (url, data) => sharedFetch(state, 'POST', url, data)
})

const _delete = state => ({
  delete: url => sharedFetch(state, 'DELETE', url)
})

const easyHTTP = (baseUrl = '', headers = { 'content-type': 'application/json' }) => {
  const state = {
    baseUrl,
    headers
  }
  return Object.assign(state, _get(state), _post(state), _put(state), _delete(state))
}

// instantiate with baseURL
const http = easyHTTP('https://jsonplaceholder.typicode.com')

// then call it
http
  .get('/posts')
  .then(res => console.log(res))
  .catch(err => console.log(err))
