/**
 *
 * Modal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectValue } from './selector';
import reducer from './reducer';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
// import styled from 'styled-components';


class Modal extends React.Component {
  constructor(props) {
    super();
    this.AcceptForm = this.AcceptForm.bind(this);
  }

  AcceptForm(ev) {
    this.props.onAccept(ev, this.props.value);
  }

  render() {
    const props = this.props;
    return (
      <div className="modal modal-fixed-footer" id={props.id} role="dialog">
        <div className="modal-content">
          <h4 className="modal-title">{props.title}</h4>
          <div className="input-field col s12">
            <i className="fa fa-lock prefix"></i>
            <textarea className="materialize-textarea" rows="5" onChange={props.onChangeValue} required></textarea>
            <label htmlFor="pgpkey">{props.lable}</label>
          </div>
          {props.failed && <div className="alert alert-danger red-text" role="alert">
            <p className="">{props.alert}</p>
          </div>}
        </div>
        <div className="modal-footer">
          <button className="modal-action modal-close waves-effect waves-red btn-flat">Cancel</button>
          <button className="modal-action modal-close waves-effect waves-teal btn-flat" onClick={this.AcceptForm}>
            Continue
          </button>
        </div>
      </div>

    );
  }
}

Modal.propTypes = {
  onAccept: PropTypes.func,
  title: PropTypes.string,
  label: PropTypes.string,
  failed: PropTypes.bool,
  alert: PropTypes.string,
  id: PropTypes.string,
  onChangeValue: PropTypes.func,
  value: PropTypes.string,
};
Modal.defaultProps = {
  failed: true,
};

const mapStateToProps = createStructuredSelector({
  value: makeSelectValue(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeValue(ev) {
      dispatch({ type: 'CHANGE_VALUE', value: ev.target.value });
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'modal', reducer });

export default compose(withReducer, withConnect)(Modal);
