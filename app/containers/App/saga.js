/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, take } from 'redux-saga/effects';
import { errorOccured } from 'containers/App/actions';

import request from 'utils/request';
import { apikeyResponse, nextAfterGetApiKey } from '../HomePage/actions';
import { AUTH_API, BACKEND_ADDRESS, GET_API_KEY } from './constants';


export function* getApikey(action) {
  const { type, next, ...other } = action;
  const reqUrl = `${BACKEND_ADDRESS}${AUTH_API}`;
  try {
    const response = yield call(request, reqUrl, { method: 'post', data: {} });
    if (response.status === 'success') {
      yield put(apikeyResponse(response));
      yield put(nextAfterGetApiKey(next, other));
    } else {
      yield put(errorOccured('some error')); // todo set correct err message
    }
  } catch (err) {
    yield put(errorOccured(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */

export default function* initialData() {
  yield takeLatest(GET_API_KEY, getApikey);
}
