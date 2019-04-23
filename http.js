class EasyHTTP {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl
    this.headers = {}
  }
  #throwError = res => {
    throw Error(`${res.status} message: ${res.statusText}`)
  }

  async get(url) {
    const response = await fetch(`${baseUrl}${url}`).then(res => {
      if (!res.ok) throw Error(`${res.status} message: ${res.statusText}`)
      return res.json()
    })
    return response
  }
  //make HTTP Post request
  async post(url, data) {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    }).then(res => {
      if (!res.ok) throw Error(`${res.status} message: ${res.statusText}`)
      return res.json()
    })
    return response
  }

  //make an HTTP Put request
  async put(url, data) {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data)
    }).then(res => {
      if (!res.ok) throw Error(`${res.status} message: ${res.statusText}`)
      return res.json()
    })
    return response
  }

  //make an HTTP delete request
  async delete(url) {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'DELETE',
      headers: this.headers
    }).then(res => {
      if (!res.ok) throw Error(`${res.status} message: ${res.statusText}`)
      return res.json()
    })
    return response
  }
}
