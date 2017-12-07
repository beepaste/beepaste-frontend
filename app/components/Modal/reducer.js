import { fromJS } from 'immutable';

const initialState = fromJS({
  value1: '',
  value2: '',
});

export default function modalReducer(state = initialState, action) {
  if (action.type === 'CHANGE_VALUE1') {
    return state.set('value1', action.value);
  } else if (action.type === 'CHANGE_VALUE2') {
    return state.set('value2', action.value);
  }
  return state;
}
