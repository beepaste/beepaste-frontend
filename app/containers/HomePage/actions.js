import {
  POST_NEW_PASTE, POST_NEW_PASTE_SUCCESS, POST_NEW_PASTE_ERROR, GET_API_KEY,
  API_KEY_SUCCESS,
} from '../App/constants';

export function postNewPaste(next) {
  return { type: GET_API_KEY, next };
}

export function postNewPasteResponse(response) {
  return { type: POST_NEW_PASTE_SUCCESS, response };
}

export function postNewPasteError(err) {
  return { type: POST_NEW_PASTE_ERROR, err };
}

export function apikeyResponse(response) {
  return { type: API_KEY_SUCCESS, name: response['X-TOKEN'] };
}

export function nextAfterGetApiKey(next, other) {
  return { type: next, other };
}

export function resetForm() {
  return { type: 'RESET' };
}
