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
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectViewPastePage from './selectors';
import reducer from 'containers/HomePage/reducer';
import saga from './saga';
import Wrapper from 'components/Wrapper';
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
import {getPasteFromApi} from "./actions";
import {GET_PASTE} from "../App/constants";


export class ViewPastePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor({ match }) {
    super();
    this.match = match;
  }
  componentDidMount() {
    if (this.props.uri === '') {
      this.props.getPaste(this.match.params.id);
    }
  }
  render() {
    const url = `https://beta.beepaste.io/paste/view/${this.props.uri}`;
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
      </main>
    );
  }
}

ViewPastePage.propTypes = {
  title: PropTypes.string,
  encryption: PropTypes.string,
  raw: PropTypes.string,
  encryptionRaw: PropTypes.string,
  shorturl: PropTypes.string,
  syntax: PropTypes.string,
  author: PropTypes.string,
  uri: PropTypes.string,
  getPaste: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  title: makeSelectPasteTitle(),
  encryption: makeSelectPasteEncryption(),
  raw: makeSelectPasteRaw(),
  encryptionRaw: makeSelectPasteEncyptedRaw(),
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
