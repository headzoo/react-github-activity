export default class Ajax {
  fetch(url, options) {
    return fetch(url, options)
      .then(resp => resp.json());
  }
}
