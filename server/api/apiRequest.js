const rp = require('request-promise');
const BACKEND_ADDRESS = 'https://beta.beepaste.io/';
const AUTH_API = 'api/v1/auth';
const PASTE_API = 'api/v1/paste';

class ApiRequest {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.options = {
      json: true,
    };
    if (this.apiKey) {
      this.options.headers = {
        'X-TOKEN': this.apiKey,
      };
    }
  }
  getApiKey() {
    this.options.url = `${BACKEND_ADDRESS}${AUTH_API}`;
    this.options.method = 'post';
    this.options.body = {};
    return rp(this.options);
  }
  getPaste(id) {
    this.options.url = `${BACKEND_ADDRESS}${PASTE_API}/${id}`;
    return rp(this.options);
  }
}
module.exports = ApiRequest;
