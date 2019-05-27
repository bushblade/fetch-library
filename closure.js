const easyHTTP = (baseUrl = '', headers = {}) => {
  const sharedFetch = async (method, endPoint, data = null) => {
    const config = {
      method,
      headers: { 'content-type': 'application/json', ...headers }
    }
    if (data) config.body = JSON.stringify(data)
    const response = await fetch(`${baseUrl}${endPoint}`, config).then(res => {
      if (!res.ok) throw Error(`${res.status} message: ${res.statusText}`)
      return res.json()
    })
    return response
  }

  return {
    get(endPoint) {
      return sharedFetch('GET', endPoint)
    },
    post(endPoint) {
      return sharedFetch('POST', endPoint, data)
    },
    put(endPoint) {
      return sharedFetch('PUT', endPoint, data)
    },
    delete(endPoint) {
      sharedFetch('DELETE', endPoint)
    }
  }
}
