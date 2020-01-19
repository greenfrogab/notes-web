export default class Communicator {

  get(url) {
    return this._send(url, "GET");
  }

  post(url, payload) {
    return this._send(url, "POST", payload);
  }

  delete(url, id) {
    return this._send(url + "/" + id, "DELETE");
  }

  put(url, id, payload) {
    return this._send(url + "/" + id, "PUT", payload);
  }

  _send(url, method, payload) {
    let request = {
      mode: 'cors',
      method: method,
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    };

    if (payload) {
      request.body = payload;
    }
    return fetch(url, request)
        .catch(error => {
          console.error(error);
          throw error;
        });
  }
}