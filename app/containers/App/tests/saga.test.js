import { put, takeLatest } from 'redux-saga';
import { getApikey } from '../saga';
import { GET_API_KEY } from '../constants';

describe('get api key test', () => {
  let getApiKeyGenerator;
  beforeEach(() => {
    getApiKeyGenerator = getApikey();
  });
  it('should get my arguments', () => {
    const res = getApiKeyGenerator.next().value;
    expect(res).toEqual(1);
  });
});
