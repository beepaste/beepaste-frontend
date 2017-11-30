import { fromJS } from 'immutable';

const initialState = fromJS({
  value: '',
});

export default function modalReducer(state = initialState, action) {
  if (action.type === 'CHANGE_VALUE') {
    return state.set('value', action.value);
  }
  return state;
}
