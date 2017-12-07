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
import saga from './saga';
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
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { getPasteFromApi, changeDecryptedRaw } from './actions';
import { GET_PASTE, PASS_MODAL, PGP_MODAL_DECRYPT } from '../App/constants';


export class ViewPastePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor({ match }) {
    super();
    this.match = match;
    this.openModal = this.openModal.bind(this);
    this.modalConfirm = this.modalConfirm.bind(this);
  }

  componentDidMount() {
    if (this.props.uri === '') {
      this.props.getPaste(this.match.params.id);
    }
  }

  openModal(id) {
    $(`#${id}`).modal({ dismissible: false });
    $(`#${id}`).modal('open');
  }

  modalConfirm(ev, value1, value2) {
    if (this.props.encryption === 'passwd') {
      this.props.setDecryptedRaw(CryptionService.DecryptRawText(this.props.encryptedRaw, value1));
    } else {
      CryptionService.DecryptWithOpenpgp(this.props.encryptedRaw, value1, value2)
        .then((decrypted) => {
          this.props.setDecryptedRaw(decrypted.data);
        }).catch(() => {
          console.log('oh');
        });
    }
  }

  render() {
    const url = `https://beta.beepaste.io/paste/view/${this.props.uri}`;
    if (this.props.encryption !== 'no' && this.props.raw === '') {
      if (this.props.encryption === 'passwd') {
        this.openModal(PASS_MODAL.id);
      } else {
        this.openModal(PGP_MODAL_DECRYPT.id);
      }
    }
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
        <Modal {...PASS_MODAL} onAccept={this.modalConfirm} />
        <Modal {...PGP_MODAL_DECRYPT} twoValue={true} onAccept={this.modalConfirm} />
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