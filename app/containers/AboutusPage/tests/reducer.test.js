
import { fromJS } from 'immutable';
import aboutusPageReducer from '../reducer';

describe('aboutusPageReducer', () => {
  it('returns the initial state', () => {
    expect(aboutusPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
