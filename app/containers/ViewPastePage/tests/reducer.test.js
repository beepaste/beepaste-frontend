
import { fromJS } from 'immutable';
import viewPastePageReducer from '../reducer';

describe('viewPastePageReducer', () => {
  it('returns the initial state', () => {
    expect(viewPastePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
