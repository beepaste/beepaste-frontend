/**
 *
 * ViewPastePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Editor from 'components/Editor';
import Wrapper from 'components/Wrapper';
import Modal from 'components/Modal';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import CryptionService from 'utils/cryptionService';
import reducer from 'containers/HomePage/reducer';
import {
  makeSelectPasteTitle,
  makeSelectPasteEncryption,
  makeSelectPasteRaw,
  makeSelectPasteEncyptedRaw,
  makeSelectPasteShortUrl,
  makeSelectPasteSyntax,
  makeSelectPasteAuthor,
  makeSelectPasteUri,
} from 'containers/App/selectors';
import saga from './saga';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { getPasteFromApi, changeDecryptedRaw } from './actions';
import { GET_PASTE, DECRYPT_PASS_MODAL, PGP_MODAL_DECRYPT } from '../App/constants';
import { loadingFinished, errorOccured } from '../App/actions';


export class ViewPastePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor({ match }) {
    super();
    this.checking = true;
    this.match = match;
    this.openModal = this.openModal.bind(this);
    this.modalConfirm = this.modalConfirm.bind(this);
  }

  componentDidMount() {
    if (this.props.uri === '') {
      this.props.getPaste(this.match.params.id);
    }
    this.checkForAuthentication(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.checkForAuthentication(nextProps);
  }

  checkForAuthentication(props) {
    if (props.encryption !== 'no' && props.raw === '' && this.checking) {
      if (props.encryption === 'passwd') {
        this.checking = false;
        this.openModal(DECRYPT_PASS_MODAL.id);
      } else if (props.encryption === 'pgp') {
        this.checking = false;
        this.openModal(PGP_MODAL_DECRYPT.id);
      }
    }
  }

  openModal(id) {
    $(`#${id}`).modal({ dismissible: false });
    $(`#${id}`).modal('open');
  }

  modalConfirm(ev, value1, value2) {
    if (this.props.encryption === 'passwd') {
      try {
        this.props.setDecryptedRaw(CryptionService.DecryptRawText(this.props.encryptedRaw, value1));
      } catch (ex) {
        this.props.throwError('Wrong password');
        setTimeout(() => {
          $(`#${DECRYPT_PASS_MODAL.id}`).modal('open');
        }, 300);
      }
    } else {
      const promise = CryptionService.DecryptWithOpenpgp(this.props.encryptedRaw, value1, value2);
      if (promise) {
        promise.then((decrypted) => {
          this.props.setDecryptedRaw(decrypted.data);
        }).catch((err) => {
          this.props.throwError('Wrong inputs');
          setTimeout(() => {
            $(`#${PGP_MODAL_DECRYPT.id}`).modal('open');
          }, 300);
        });
      } else {
        this.props.throwError('Wrong inputs');
        setTimeout(() => {
          $(`#${PGP_MODAL_DECRYPT.id}`).modal('open');
        }, 300);
      }
    }
  }

  render() {
    const url = `https://beta.beepaste.io/view/${this.props.uri}`;

    return (
      <main>
        <Wrapper title={this.props.title}>
          <div className="row">
            <div className="col s12 m9 l10 left">
              <div className="details">By {this.props.author}</div>
              <div className="details">URL <Link
                to={url}
              >{url}</Link></div>
              <div className="details">short URL <a href={this.props.shorturl}>{this.props.shorturl}</a></div>
              <div className="details">Embed Code: <span className="red-text">in beta, currently not working!</span>
                <input data-lang-showcode="Show Code" id="embed_field" type="text" value="{{ embedCode }}" /></div>
            </div>
            <div className="col s12 m3 l2 right">
              {/* {<ngx-qrcode [qrc-element-type]="qrType" [qrc-value] = "qrValue"></ngx-qrcode>}*/}
              <QRCode value={url} />
            </div>
          </div>
          <div className="row editor-area-view">
            <Editor
              mode={this.props.syntax}
              defaultValue={this.props.raw}
              readonly
            />
          </div>
        </Wrapper>
        <Modal {...DECRYPT_PASS_MODAL} onAccept={this.modalConfirm} />
        <Modal {...PGP_MODAL_DECRYPT} twoValue onAccept={this.modalConfirm} />
      </main>
    );
  }
}

ViewPastePage.propTypes = {
  title: PropTypes.string,
  encryption: PropTypes.string,
  raw: PropTypes.string,
  encryptedRaw: PropTypes.string,
  shorturl: PropTypes.string,
  syntax: PropTypes.string,
  author: PropTypes.string,
  uri: PropTypes.string,
  getPaste: PropTypes.func,
  setDecryptedRaw: PropTypes.func,
  throwError: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  title: makeSelectPasteTitle(),
  encryption: makeSelectPasteEncryption(),
  raw: makeSelectPasteRaw(),
  encryptedRaw: makeSelectPasteEncyptedRaw(),
  shorturl: makeSelectPasteShortUrl(),
  syntax: makeSelectPasteSyntax(),
  author: makeSelectPasteAuthor(),
  uri: makeSelectPasteUri(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPaste(id) {
      dispatch(getPasteFromApi(GET_PASTE, id));
    },
    setDecryptedRaw(raw) {
      dispatch(changeDecryptedRaw(raw));
    },
    throwError(msg) {
      dispatch(errorOccured(msg));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'viewPastePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewPastePage);
