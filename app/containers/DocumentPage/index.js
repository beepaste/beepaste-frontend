/**
 *
 * DocumentPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDocumentPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class DocumentPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

DocumentPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  documentpage: makeSelectDocumentPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'documentPage', reducer });
const withSaga = injectSaga({ key: 'documentPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DocumentPage);
