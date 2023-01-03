function _handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getQuote() {
  return fetch("https://api.quotable.io/random").then((res) =>
    _handleResponse(res)
  );
}

export { getQuote };
