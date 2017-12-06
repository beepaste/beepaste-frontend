import {fromJS} from 'immutable';

import {
  POST_NEW_PASTE_SUCCESS,
} from 'containers/App/constants';
import {API_KEY_SUCCESS, GET_PASTE_SUCCESS} from "./constants";
// The initial state of the App
const initialState = fromJS({
  error: false,
  loading: false,
  footer: {
    year: 2017,
  },
  api_key: '',
  paste: {
    title: '',
    encryption: '',
    raw: '',
    encryptedRaw: '',
    shorturl: '',
    syntax: '',
    author: '',
    uri: '',
  },
});

function setPaste(state, response) {
  response.encryptedRaw = '';
  if (response.encryption !== 'no') {
    response.encryptedRaw = response.raw;
  }
  return state.setIn(['paste', 'title'], response.title)
    .setIn(['paste', 'encryption'], response.encryption)
    .setIn(['paste', 'raw'], response.raw)
    .setIn(['paste', 'encryptedRaw'], response.encryptedRaw)
    .setIn(['paste', 'shorturl'], response.shorturl)
    .setIn(['paste', 'syntax'], response.syntax)
    .setIn(['paste', 'author'], response.author)
    .setIn(['paste', 'uri'], response.uri);
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case API_KEY_SUCCESS:
      return state.set('api_key', action.name);
    case 'POST_NEW_PASTE_ERROR':
      return state.set('error', action.err).set('loading', false);
    case POST_NEW_PASTE_SUCCESS:
    case GET_PASTE_SUCCESS:
      return setPaste(state, action.response);
    default:
      return state;
  }
}

export default appReducer;
