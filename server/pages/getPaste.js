const ApiRequest = require('../api/apiRequest');
module.exports = function getPaste(id, onResponse) {
  generateToken().then((response) => {
    const apiKey = response['X-TOKEN'];
    requestPaste(apiKey, id).then((res) => {
      onResponse(res);
    })
    .catch((err) => {
      onResponse(false);
    });
  })
  .catch((err) => {
    onResponse(false);
  });
};
function requestPaste(apiKey, id) {
  const apiRequest = new ApiRequest(apiKey);
  return apiRequest.getPaste(id);
}
function generateToken() {
  const apiRequest = new ApiRequest();
  return apiRequest.getApiKey();
}
