import { fromJS } from 'immutable';
import {
  REQUEST_PASTE_NEW,
  CHANGE_AUTHOR,
  CHANGE_TITLE,
  CHANGE_PASTE_LANGUAGE,
  CHANGE_PASTE_EXPIRE,
  CHANGE_RAW_CODE,
  CHANGE_ENCRYPTION,
  CHANGE_ENCRYPTED_PASTE_RAW,
  POST_NEW_PASTE_SUCCESS,
} from 'containers/App/constants';

const initialState = fromJS({
  form: {
    author: 'Anonymous',
    pasteTitle: 'Untitled',
    pasteLanguage: 'text',
    pasteExpire: '0',
    pasteRaw: '',
    encryptedPasteRaw: '',
    pasteEncryption: 'no',
  },
});


function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case REQUEST_PASTE_NEW:
      return state.setIn(['form', 'apiKey'], action.response['X-TOKEN']);
    case CHANGE_AUTHOR:
      return state.setIn(['form', 'author'], action.name);
    case CHANGE_TITLE:
      return state.setIn(['form', 'pasteTitle'], action.name);
    case CHANGE_PASTE_LANGUAGE:
      return state.setIn(['form', 'pasteLanguage'], action.name);
    case CHANGE_PASTE_EXPIRE:
      return state.setIn(['form', 'pasteExpire'], action.name);
    case CHANGE_RAW_CODE:
      return state.setIn(['form', 'pasteRaw'], action.name);
    case CHANGE_ENCRYPTED_PASTE_RAW:
      return state.setIn(['form', 'encryptedPasteRaw'], action.name);
    case CHANGE_ENCRYPTION:
      return state.setIn(['form', 'pasteEncryption'], action.name);
    default:
      return state;
  }
}

export default homeReducer;
