/**
 *
 * Editor
 *
 */

import React from 'react';
import AceEditor from 'react-ace';
import { languages } from 'containers/App/constants';
import 'brace/theme/xcode';
import PropTypes from 'prop-types';

// import styled from 'styled-components';
languages.forEach((lang) => {
  require(`brace/mode/${lang.value}`);
  require(`brace/snippets/${lang.value}`);
});

function Editor(props) { // eslint-disable-line react/prefer-stateless-function
  return (
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
    />
  );
}

Editor.propTypes = {
  onChangeContent: PropTypes.func,
  mode: PropTypes.string,
  defaultValue: PropTypes.string,
  readonly: PropTypes.bool,
};

export default Editor;
