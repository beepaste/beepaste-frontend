import { CHANGE_DECRYPTED_RAW, GET_API_KEY, GET_PASTE_SUCCESS } from '../App/constants';

export function getPasteFromApi(next, id, server) {
  return { type: GET_API_KEY, next, id, server };
}

export function getPasteSuccess(response) {
  return { type: GET_PASTE_SUCCESS, response };
}
export function changeDecryptedRaw(raw) {
  return { type: CHANGE_DECRYPTED_RAW, raw };
}
