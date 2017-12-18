import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_PASTE, BACKEND_ADDRESS, PASTE_API } from '../App/constants';
import { push } from 'react-router-redux';
import request from '../../utils/request';
import { makeSelectApiKey } from '../App/selectors';
import { getPasteSuccess } from './actions';
import { errorOccured } from '../App/actions';


function* getPaste(action) {
  const id = action.other.id;
  const apiKey = yield select(makeSelectApiKey());
  const reqUrl = `${BACKEND_ADDRESS}${PASTE_API}/${id}`;
  try {
    const response = yield call(request, reqUrl, { headers: { 'X-TOKEN': apiKey, 'content-type': 'application/json' } });
    if (response.status === 'success') {
      yield put(getPasteSuccess(response.paste));
    } else {
      console.log('else')
      yield put(errorOccured(response));
    }
  } catch (err) {
    yield put(push('/notfound'));
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_PASTE, getPaste);
}
