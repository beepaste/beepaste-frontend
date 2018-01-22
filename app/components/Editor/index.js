/**
 *
 * Editor
 *
 */

import React from 'react';
import { languages } from 'containers/App/constants';

import PropTypes from 'prop-types';
let xcode;
let AceEditor;
// import styled from 'styled-components';


class Editor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super();
    this.props = props;
  }
  componentWillMount() {
    AceEditor = require('react-ace').default; // eslint-disable-line global-require
    xcode = require('brace/theme/xcode'); // eslint-disable-line global-require
    languages.forEach((lang) => {
      require(`brace/mode/${lang.value}`); // eslint-disable-line global-require
      require(`brace/snippets/${lang.value}`); // eslint-disable-line global-require
    });
  }
  render() {
    const props = this.props;
    return (
      <div>
        {AceEditor ?
          <AceEditor
            mode={props.mode}
            theme="xcode"
            width="auto"
            value={props.defaultValue}
            onChange={props.onChangeContent}
            name="Editor"
            minLines={20}
            maxLines={25}
            readOnly={props.readonly === true}
          /> : <div>{props.defaultValue}</div>}
      </div>
    );
  }
}

Editor.propTypes = {
  onChangeContent: PropTypes.func,
  mode: PropTypes.string,
  defaultValue: PropTypes.string,
  readonly: PropTypes.bool,
};

export default Editor;
