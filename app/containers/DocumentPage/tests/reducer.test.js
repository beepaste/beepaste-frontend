
import { fromJS } from 'immutable';
import documentPageReducer from '../reducer';

describe('documentPageReducer', () => {
  it('returns the initial state', () => {
    expect(documentPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
