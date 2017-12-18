/**
 * Gets the repositories of the user from Github
 */
import request from 'utils/request';
import { push } from 'react-router-redux';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { MESSAGES, POST_NEW_PASTE, BACKEND_ADDRESS, PASTE_API } from 'containers/App/constants';
import { resetForm, postNewPasteResponse, postNewPasteError } from './actions';
import { makeSelectForm } from './selector';
import { makeSelectApiKey } from '../App/selectors';
import { errorOccured } from '../App/actions';


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
  dataToSend.expireAfter = pasteExpire;

  const reqUrl = `${BACKEND_ADDRESS}${PASTE_API}`;

  try {
    const result = yield call(request, reqUrl, {
      method: 'post',
      body: JSON.stringify(dataToSend),
      headers: { 'X-TOKEN': apiKey, 'content-type': 'application/json' },
    });
    if (result.status === 'success') {
      yield put(resetForm());
      yield put(postNewPasteResponse(result.paste));
      yield put(push(`view/${result.paste.uri}`));
    } else {
      yield put(errorOccured(MESSAGES.DEFAULT_API_ERROR));
    }
  } catch (err) {
    yield put(errorOccured(err));
  }
}


export default function* pasteNewApiCall() {
  yield takeLatest(POST_NEW_PASTE, pasteNew);
}
