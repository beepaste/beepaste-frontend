import React from 'react';
import { END } from 'redux-saga';
import { loadingFinished } from 'containers/App/actions';
import {
  PGP_MODAL,
  PASS_MODAL,
  CHANGE_AUTHOR,
  CHANGE_TITLE,
  CHANGE_PASTE_LANGUAGE,
  CHANGE_PASTE_EXPIRE,
  CHANGE_RAW_CODE,
  CHANGE_ENCRYPTION,
  CHANGE_ENCRYPTED_PASTE_RAW,
  POST_NEW_PASTE,
  languages,
  expires,
} from 'containers/App/constants';
import CryptionService from 'utils/cryptionService';
import Modal from 'components/Modal';
import Editor from 'components/Editor';
import Wrapper from 'components/Wrapper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { postNewPaste } from './actions';
import Select from './Select';
import saga from './saga';
import reducer from './reducer';
import {
  makeSelectForm,
  makeSelectAuthor,
  makeSelectPastTitle,
  makeSelectPasteLanguage,
  makeSelectPasteExpire,
  makeSelectPasteRaw,
  makeSelectPasteEncryption,
} from './selector';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.checkForm = this.checkForm.bind(this);
    this.modalConfirm = this.modalConfirm.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillMount() {
    if (typeof window === 'undefined') {
      this.props.endSaga();
    }
  }
  componentDidMount() {
    this.props.appLoaded();
  }
  openModal(id) {
    $(`#${id}`).modal({ dismissible: false }); // eslint-disable-line no-undef
    $(`#${id}`).modal('open'); // eslint-disable-line no-undef
  }

  modalConfirm(ev, value) {
    if (this.props.pasteencryption === 'passwd') {
      this.props.onChangeEncryptedRaw(CryptionService.EncryptRawText(this.props.pasteraw, value));
    } else {
      CryptionService.EncryptWithOpenpgp(this.props.pasteraw, value).then((cryptedValue) => {
        this.props.onChangeEncryptedRaw(cryptedValue.data);
      }).catch(() => {
        console.error('oh'); // TODO error handling
      });
    }
    this.props.onSubmitForm(ev);
  }

  checkForm(ev) {
    if (this.props.pasteencryption !== 'no') {
      ev.preventDefault();
      if (this.props.pasteencryption === 'passwd') {
        this.openModal(PASS_MODAL.id);
      } else {
        this.openModal(PGP_MODAL.id);
      }
    } else {
      this.props.onSubmitForm(ev);
    }
  }

  render() {
    const languageOptions = languages.map((lang) => <option key={lang.value} value={lang.value}>{lang.text}</option>);
    const expireOptions = expires.map((exp) => <option key={exp.value} value={exp.value}>{exp.text}</option>);
    return (
      <main>
        <Wrapper title="Create a New Paste">
          <form onSubmit={this.checkForm} id="pasteForm">
            <div className="form-container">
              <div className="row">
                <div className="input-field col s12 m3">
                  <i className="fa fa-user prefix"></i>
                  <input id="pasteAuthor" type="text" name="pasteAuthor" value={this.props.author} onChange={this.props.onChangeAnyThing} />
                  <label className={this.props.author !== undefined && this.props.author !== '' ? 'active' : ''} htmlFor="pasteAuthor">Author</label>
                </div>
                <div className="input-field col s12 m3">
                  <i className="fa fa-flag prefix"></i>
                  <input
                    id="pasteTitle"
                    type="text"
                    name="pasteTitle"
                    value={this.props.pastetitle}
                    onChange={this.props.onChangeAnyThing}
                  />
                  <label className={this.props.pastetitle !== undefined && this.props.pastetitle !== '' ? 'active' : ''} htmlFor="pasteTitle">Title</label>
                </div>

                <Select
                  id="pasteLanguage" icon="fa-code" defaultValue={this.props.pastelanguage} name="pasteLanguage"
                  onSelectChange={this.props.onChangeAnyThing}
                >
                  {languageOptions}
                </Select>
                <Select
                  id="pasteExpire" icon="fa-calendar" defaultValue={this.props.pasteexpire} name="pasteExpire"
                  onSelectChange={this.props.onChangeAnyThing}
                >
                  {expireOptions}
                </Select>
              </div>
              <div className="editor-area row">
                <div className="col s12">
                  <Editor
                    onChangeContent={this.props.onChangeRaw} mode={this.props.pastelanguage}
                    defaultValue={this.props.pasteraw}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s6">
                  <label htmlFor="encrypt" className="encryption-label"><i className="fa fa-lock"></i>
                    Encryption</label>
                  <div id="encrypt">
                    <input
                      id="noEncrypt" className="with-gap" type="radio" name="pasteEncryption" value="no"
                      checked={this.props.pasteencryption === 'no'}
                      onChange={this.props.onChangeAnyThing}
                    />
                    <label htmlFor="noEncrypt">No Encryption</label>
                    <input
                      id="passwdEncrypt" className="with-gap" type="radio" name="pasteEncryption" value="passwd"
                      checked={this.props.pasteencryption === 'passwd'}
                      onChange={this.props.onChangeAnyThing}
                    />
                    <label htmlFor="passwdEncrypt">Encrypt with Password</label>
                    <input
                      id="pgpEncrypt" className="with-gap" type="radio" name="pasteEncryption" value="pgp"
                      checked={this.props.pasteencryption === 'pgp'}
                      onChange={this.props.onChangeAnyThing}
                    />
                    <label htmlFor="pgpEncrypt">Encrypt with PGP Keys</label>
                  </div>
                </div>
                <div className="col s6">
                  <button
                    className="col s12 btn-large waves-effect waves-light" type="submit" id="submitBtn"
                    onClick={this.checkForm}
                  >Create
                    Paste!
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Wrapper>
        <Modal {...PASS_MODAL} onAccept={this.modalConfirm} />
        <Modal {...PGP_MODAL} onAccept={this.modalConfirm} />
      </main>
    );
  }
}

HomePage.propTypes = {
  onChangeRaw: PropTypes.func,
  onChangeEncryptedRaw: PropTypes.func,
  onChangeAnyThing: PropTypes.func,
  onSubmitForm: PropTypes.func,
  appLoaded: PropTypes.func,
  endSaga: PropTypes.func,
  form: PropTypes.object,
  author: PropTypes.string,
  pastetitle: PropTypes.string,
  pastelanguage: PropTypes.string,
  pasteexpire: PropTypes.string,
  pasteraw: PropTypes.string,
  pasteencryption: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  // form: makeSelectForm(),
  form: makeSelectForm(),
  author: makeSelectAuthor(),
  pastetitle: makeSelectPastTitle(),
  pastelanguage: makeSelectPasteLanguage(),
  pasteexpire: makeSelectPasteExpire(),
  pasteraw: makeSelectPasteRaw(),
  pasteencryption: makeSelectPasteEncryption(),
});

export function mapDispatchToProps(dispatch) {
  return {
    endSaga: () => {
      dispatch(END);
    },
    onChangeRaw: (evt) => {
      dispatch({ type: CHANGE_RAW_CODE, name: evt });
    },
    onChangeEncryptedRaw: (text) => {
      dispatch({ type: CHANGE_ENCRYPTED_PASTE_RAW, name: text });
    },
    onChangeAnyThing: (evt) => {
      const mapingFuncs = {
        pasteAuthor: CHANGE_AUTHOR,
        pasteTitle: CHANGE_TITLE,
        pasteLanguage: CHANGE_PASTE_LANGUAGE,
        pasteExpire: CHANGE_PASTE_EXPIRE,
        pasteEncryption: CHANGE_ENCRYPTION,
      };
      dispatch({ type: mapingFuncs[evt.target.name], name: evt.target.value });
    },
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(postNewPaste(POST_NEW_PASTE));
    },
    appLoaded: () => {
      dispatch(loadingFinished());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
