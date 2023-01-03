class QuotableApi {
  _handleResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getQuote() {
    return fetch("https://api.quotable.io/random").then((res) =>
      this._handleResponse(res)
    );
  }
}

const quoteApi = new QuotableApi();

export default quoteApi;
