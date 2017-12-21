import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  link: '',
  title: '',
});

function viewPastePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      console.log(action);
      return state;
    default:
      return state;
  }
}

export default viewPastePageReducer;
