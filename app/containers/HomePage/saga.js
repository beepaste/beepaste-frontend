/**
 * Gets the repositories of the user from Github
 */
import request from 'utils/request';
import { push } from 'react-router-redux';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { POST_NEW_PASTE } from 'containers/App/constants';
import { resetForm, postNewPasteResponse, postNewPasteError } from './actions';
import { makeSelectForm } from './selector';
import { makeSelectApiKey } from '../App/selectors';


export function* pasteNew() {
  const form = yield select(makeSelectForm());
  const other = form;
  const apiKey = yield select(makeSelectApiKey());
  const dataToSend = {
    author: other.author,
    encryption: other.pasteEncryption,
    syntax: other.pasteLanguage,
    title: other.pasteTitle,
    raw: other.pasteEncryption === 'no' ? other.pasteRaw : other.encryptedPasteRaw,
  };
  const pasteExpire = parseInt(other.pasteExpire);
  if (pasteExpire !== 0) {
    dataToSend.toExpire = true;
  } else {
    dataToSend.toExpire = false;
  }
  let timeObject = new Date();
  timeObject = new Date(timeObject.getTime() + 1000 * pasteExpire);
  dataToSend.expiryDate = timeObject;

  const reqUrl = 'https://beta.beepaste.io/api/v1/paste';

  try {
    const result = yield call(request, reqUrl, { method: 'post', body: JSON.stringify(dataToSend), headers: { 'X-TOKEN': apiKey, 'content-type': 'application/json' } });
    yield put(resetForm());
    yield put(postNewPasteResponse(result.paste));
    yield put(push(`view/${result.paste.uri}`));
  } catch (err) {
    yield put(postNewPasteError(err));
  }
}


export default function* pasteNewApiCall() {
  // yield takeLatest(POST_NEW_PASTE, getApikey);
  yield takeLatest(POST_NEW_PASTE, pasteNew);
}

