function main(baseUrl = '', headers = {}) {
  const sharedFetch = async (method, endPoint, data = null) => {
    const config = {
      method,
      headers: { 'Content-Type': 'application/json', ...headers }
    }
    if (data) config.body = JSON.stringify(data)
    const response = await fetch(encodeURI(`${baseUrl}${endPoint}`), config)

    if (!response.ok)
      throw Error(`${response.status} message: ${response.statusText}`)
    return response.json()
  }

  return {
    get(endPoint) {
      return sharedFetch('GET', endPoint)
    },
    post(endPoint, data) {
      return sharedFetch('POST', endPoint, data)
    },
    put(endPoint, data) {
      return sharedFetch('PUT', endPoint, data)
    },
    delete(endPoint) {
      return sharedFetch('DELETE', endPoint)
    }
  }
}

export default main
