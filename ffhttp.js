const _sharedFetch = async (state, method, url, data = null) => {
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
  get: url => _sharedFetch(state, 'GET', url)
})

const _post = state => ({
  post: (url, data) => _sharedFetch(state, 'POST', url, data)
})

const _put = state => ({
  put: (url, data) => _sharedFetch(state, 'PUT', url, data)
})

const _delete = state => ({
  delete: url => _sharedFetch(state, 'DELETE', url)
})

const easyHTTP = (baseUrl = '', headers = { 'content-type': 'application/json' }) => {
  const state = {
    baseUrl,
    headers
  }
  return Object.assign(state, _get(state), _post(state), _put(state), _delete(state))
}

export default easyHTTP
