const easyHTTP = (baseUrl = '', headers = { 'content-type': 'application/json' }) => {
  const state = {
    baseUrl,
    headers
  }
  const sharedFetch = async (method, url, data = null) => {
    const config = {
      method,
      headers: state.headers
    }
    if (data) config.body = JSON.stringify(data)
    const response = await fetch(`${baseUrl}${url}`, config).then(res => {
      if (!res.ok) throw Error(`${res.status} message: ${res.statusText}`)
      return res.json()
    })
    return response
  }

  return {
    get(url) {
      return sharedFetch('GET', url)
    },
    post(url) {
      return sharedFetch('POST', url, data)
    },
    put(url) {
      return sharedFetch('PUT', url, data)
    },
    delete(url) {
      sharedFetch('DELETE', url)
    }
  }
}
