import { POST_NEW_PASTE, POST_NEW_PASTE_SUCCESS, POST_NEW_PASTE_ERROR } from '../App/constants';

export function postNewPaste() {
  return { type: POST_NEW_PASTE };
}

export function postNewPasteResponse(response) {
  return { type: POST_NEW_PASTE_SUCCESS, response };
}

export function postNewPasteError(err) {
  return { type: POST_NEW_PASTE_ERROR, err };
}

export function apikeyResponse(type, response) {
  return { type, response };
}
