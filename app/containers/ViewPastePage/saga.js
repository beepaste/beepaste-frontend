import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { apikeyResponse, postNewPasteError } from '../HomePage/actions';
import { POST_NEW_PASTE, REQUEST_PASTE_NEW, GET_PASTE } from '../App/constants';
import request from '../../utils/request';
import { makeSelectApiKey } from '../App/selectors';
import { getPasteSuccess } from './actions';
import { errorOccured } from '../App/actions';


function* getPaste(action) {
  const id = action.other.id;
  const apiKey = yield select(makeSelectApiKey());
  const reqUrl = `https://beta.beepaste.io/api/v1/paste/${id}`;
  try {
    const response = yield call(request, reqUrl, { headers: { 'X-TOKEN': apiKey, 'content-type': 'application/json' } });
    if (response.status === 'success') {
      yield put(getPasteSuccess(response.paste));
    } else {
      yield put(errorOccured(response));
    }
  } catch (err) {
    yield put(errorOccured(err));
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_PASTE, getPaste);
}
