import { fromJS } from 'immutable';
import {
  POST_NEW_PASTE_SUCCESS,
  API_KEY_SUCCESS,
  CHANGE_DECRYPTED_RAW,
  GET_PASTE_SUCCESS,
  ERROR,
  CLEAR_ERROR, HIDE_LOADING, POST_NEW_PASTE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  error: false,
  loading: true,
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
    response.raw = '';
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
    case ERROR:
      return state.set('error', action.error).set('loading', false);
    case CLEAR_ERROR:
      return state.set('error', false);
    case HIDE_LOADING:
      return state.set('loading', false);
    case API_KEY_SUCCESS:
      return state.set('api_key', action.name);
    case POST_NEW_PASTE_SUCCESS:
    case GET_PASTE_SUCCESS:
      return setPaste(state, action.response).set('loading',false);
    case CHANGE_DECRYPTED_RAW:
      return state.setIn(['paste', 'raw'], action.raw);
    case POST_NEW_PASTE:
      return state.set('loading', true);
    default:
      return state;
  }
}

export default appReducer;
