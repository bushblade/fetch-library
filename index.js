function main(baseUrl = '', headers = {}) {
  async function sharedFetch(method, endPoint, body = null) {
    const config = {
      method,
      headers: { 'Content-Type': 'application/json', ...headers }
    }
    if (body) config.body = JSON.stringify(body)
    const response = await fetch(encodeURI(`${baseUrl}${endPoint}`), config)

    return new Promise(async (resolve, reject) => {
      let data = {}
      if (response.json) data = await response.json()
      if (!response.ok) {
        const error = new Error(
          `${response.status} message: ${response.statusText}`
        )
        reject({ error, data })
      } else {
        resolve({ data })
      }
    })
  }

  return {
    get(endPoint) {
      return sharedFetch('GET', endPoint)
    },
    post(endPoint, body) {
      return sharedFetch('POST', endPoint, body)
    },
    put(endPoint, body) {
      return sharedFetch('PUT', endPoint, body)
    },
    delete(endPoint) {
      return sharedFetch('DELETE', endPoint)
    }
  }
}

export default main
