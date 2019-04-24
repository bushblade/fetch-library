class HTTP {
  constructor(baseUrl = '', headers = { 'content-type': 'application/json' }) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  async _sharedFetch(method, url, data = null) {
    const config = {
      method,
      headers: this.headers
    }
    if (data) config.body = JSON.stringify(data)
    const response = await fetch(`${this.baseUrl}${url}`, config).then(res => {
      if (!res.ok) throw Error(`${res.status} message: ${res.statusText}`)
      return res.json()
    })
    return response
  }

  get(url) {
    return this._sharedFetch('GET', url)
  }

  post(url, data) {
    return this._sharedFetch('POST', url, data)
  }

  put(url, data) {
    return this._sharedFetch('PUT', url, data)
  }

  delete(url) {
    return this._sharedFetch('DELETE', url)
  }
}
