/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { POST_NEW_PASTE, REQUEST_PASTE_NEW } from 'containers/App/constants';
import { postNewPasteResponse, postNewPasteError, apikeyResponse } from './actions';
import { makeSelectForm } from './selector';
import request from 'utils/request';
import { push } from 'react-router-redux';


export function* pasteNew(response) {
  const form = yield select(makeSelectForm());
  const { apiKey, ...other } = form;
  console.log(form);
  const reqUrl = 'https://beta.beepaste.io/api/v1/paste';

  try {
    const repos = yield call(request, reqUrl, { method: 'post', data: JSON.stringify(other), headers: { 'X-TOKEN': apiKey } });
    yield put(postNewPasteResponse(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getApikey() {
  const reqUrl = 'https://beta.beepaste.io/api/v1/auth';
  try {
    const response = yield call(request, reqUrl, { method: 'post', data: {} });
    if (response.status === 'success') {
      yield put(apikeyResponse(REQUEST_PASTE_NEW, response));
    } else {
      yield put(postNewPasteError('some error')); // todo set correct err message
    }
  } catch (err) {
    yield put(postNewPasteError(err));
  }
}

export default function* pasteNewApiCall() {
  yield takeLatest(POST_NEW_PASTE, getApikey);
  yield takeLatest(REQUEST_PASTE_NEW, pasteNew);
}

