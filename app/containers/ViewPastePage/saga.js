import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { END } from 'redux-saga';
import { GET_PASTE, BACKEND_ADDRESS, PASTE_API } from '../App/constants';
import request from '../../utils/request';
import { makeSelectApiKey } from '../App/selectors';
import { getPasteSuccess } from './actions';
import { errorOccured } from '../App/actions';


function* getPaste(action) {
  const id = action.other.id;
  const server = action.other.server;
  const apiKey = yield select(makeSelectApiKey());
  const reqUrl = `${BACKEND_ADDRESS}${PASTE_API}/${id}`;
  try {
    const response = yield call(request, reqUrl, { headers: { 'X-TOKEN': apiKey, 'content-type': 'application/json' } });
    if (response.status === 'success') {
      yield put(getPasteSuccess(response.paste));
      if (server) {
        yield put(END);
      }
    } else {
      yield put(errorOccured(response));
      if (server) {
        yield put(END);
      }
    }
  } catch (err) {
    yield put(push('/notfound'));
    if (server) {
      yield put(END);
    }
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_PASTE, getPaste);
}
