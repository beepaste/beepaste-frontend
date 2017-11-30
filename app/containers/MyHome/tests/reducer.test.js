
import { fromJS } from 'immutable';
import myHomeReducer from '../reducer';

describe('myHomeReducer', () => {
  it('returns the initial state', () => {
    expect(myHomeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
