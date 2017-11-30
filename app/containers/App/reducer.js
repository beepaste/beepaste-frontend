import { fromJS } from 'immutable';

// import {
//   LOAD_REPOS_SUCCESS,
//   LOAD_REPOS,
//   LOAD_REPOS_ERROR,
// } from './constants';

// The initial state of the App
const initialState = fromJS({
  error: false,
  loading: false,
  footer: {
    year: 2017,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'POST_NEW_PASTE_ERROR':
      return state.set('error', action.err).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
