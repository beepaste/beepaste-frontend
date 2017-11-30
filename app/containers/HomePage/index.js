/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Wrapper from './Wrapper';
import Select from './Select';
import Modal from 'components/Modal';
import Editor from 'components/Editor';
import PropTypes from 'prop-types';
import saga from './saga';
import reducer from './reducer';
import {
  makeSelectForm,
  makeSelectApikey,
  makeSelectAuthor,
  makeSelectPastTitle,
  makeSelectPasteLanguage,
  makeSelectPasteExpire,
  makeSelectPasteRaw,
  makeSelectPasteEncryption,
} from './selector';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { postNewPaste } from './actions';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import {
  REQUEST_PASTE_NEW,
  CHANGE_AUTHOR,
  CHANGE_TITLE,
  CHANGE_PASTE_LANGUAGE,
  CHANGE_PASTE_EXPIRE,
  CHANGE_RAW_CODE,
  CHANGE_ENCRYPTION,
} from 'containers/App/constants';


const PGP_MODAL = {
  title: 'Encrypt your paste with PGP key',
  alert: 'pgp-key is required to encrypt your paste!',
  label: 'Your PGP public-key:',
  id: 'pgpModal',
};


const PASS_MODAL = {
  title: 'Encrypt your paste with Password-OTP',
  alert: 'Your Password:',
  label: 'password is required to encrypt your paste!',
  id: 'passwordModal',
};

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.checkForm = this.checkForm.bind(this);
    this.modalConfirm = this.modalConfirm.bind(this);
  }

  openModal(id) {
    $(`#${id}`).modal({ dismissible: false });
    $(`#${id}`).modal('open');
  }

  modalConfirm(ev, value) {
    console.log(ev, value);
    if (this.props.pasteencryption === 'passwd') {
      console.log(ev, value);
      // todo cryption raw text
    } else {
      console.log(ev, value);
      // todo cryption raw text
    }
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
    const error = 'oh some error!';
    const languages = [{ value: 'abap', text: 'Abap' },
      { value: 'abc', text: 'Abc' },
      { value: 'actionscript', text: 'Actionscript' },
      { value: 'ada', text: 'Ada' },
      { value: 'apache_conf', text: 'Apache_conf' },
      { value: 'applescript', text: 'Applescript' },
      { value: 'asciidoc', text: 'Asciidoc' },
      { value: 'assembly_x86', text: 'Assembly_x86' },
      { value: 'autohotkey', text: 'Autohotkey' },
      { value: 'batchfile', text: 'Batchfile' },
      { value: 'c9search', text: 'C9search' },
      { value: 'c_cpp', text: 'C++' },
      { value: 'cirru', text: 'Cirru' },
      { value: 'clojure', text: 'Clojure' },
      { value: 'cobol', text: 'Cobol' },
      { value: 'coffee', text: 'Coffee' },
      { value: 'coldfusion', text: 'Coldfusion' },
      { value: 'csharp', text: 'Csharp' },
      { value: 'css', text: 'Css' },
      { value: 'curly', text: 'Curly' },
      { value: 'd', text: 'D' },
      { value: 'dart', text: 'Dart' },
      { value: 'diff', text: 'Diff' },
      { value: 'django', text: 'Django' },
      { value: 'dockerfile', text: 'Dockerfile' },
      { value: 'dot', text: 'Dot' },
      { value: 'eiffel', text: 'Eiffel' },
      { value: 'ejs', text: 'Ejs' },
      { value: 'elixir', text: 'Elixir' },
      { value: 'elm', text: 'Elm' },
      { value: 'erlang', text: 'Erlang' },
      { value: 'forth', text: 'Forth' },
      { value: 'ftl', text: 'Ftl' },
      { value: 'gcode', text: 'Gcode' },
      { value: 'gherkin', text: 'Gherkin' },
      { value: 'gitignore', text: 'Gitignore' },
      { value: 'glsl', text: 'Glsl' },
      { value: 'golang', text: 'Golang' },
      { value: 'groovy', text: 'Groovy' },
      { value: 'haml', text: 'Haml' },
      { value: 'handlebars', text: 'Handlebars' },
      { value: 'haskell', text: 'Haskell' },
      { value: 'haxe', text: 'Haxe' },
      { value: 'html', text: 'Html' },
      { value: 'html_elixir', text: 'Html_elixir' },
      { value: 'html_ruby', text: 'Html_ruby' },
      { value: 'ini', text: 'Ini' },
      { value: 'io', text: 'Io' },
      { value: 'jack', text: 'Jack' },
      { value: 'jade', text: 'Jade' },
      { value: 'java', text: 'Java' },
      { value: 'javascript', text: 'Javascript' },
      { value: 'json', text: 'Json' },
      { value: 'jsoniq', text: 'Jsoniq' },
      { value: 'jsp', text: 'Jsp' },
      { value: 'jsx', text: 'Jsx' },
      { value: 'julia', text: 'Julia' },
      { value: 'latex', text: 'Latex' },
      { value: 'lean', text: 'Lean' },
      { value: 'less', text: 'Less' },
      { value: 'liquid', text: 'Liquid' },
      { value: 'lisp', text: 'Lisp' },
      { value: 'live_script', text: 'Live_script' },
      { value: 'livescript', text: 'Livescript' },
      { value: 'logiql', text: 'Logiql' },
      { value: 'lsl', text: 'Lsl' },
      { value: 'lua', text: 'Lua' },
      { value: 'luapage', text: 'Luapage' },
      { value: 'lucene', text: 'Lucene' },
      { value: 'makefile', text: 'Makefile' },
      { value: 'markdown', text: 'Markdown' },
      { value: 'mask', text: 'Mask' },
      { value: 'matlab', text: 'Matlab' },
      { value: 'maze', text: 'Maze' },
      { value: 'mel', text: 'Mel' },
      { value: 'mips_assembler', text: 'Mips_assembler' },
      { value: 'mipsassembler', text: 'Mipsassembler' },
      { value: 'mushcode', text: 'Mushcode' },
      { value: 'mysql', text: 'Mysql' },
      { value: 'nix', text: 'Nix' },
      { value: 'objectivec', text: 'Objectivec' },
      { value: 'ocaml', text: 'Ocaml' },
      { value: 'pascal', text: 'Pascal' },
      { value: 'perl', text: 'Perl' },
      { value: 'pgsql', text: 'Pgsql' },
      { value: 'php', text: 'Php' },
      { value: 'plain_text', text: 'Plain_text' },
      { value: 'powershell', text: 'Powershell' },
      { value: 'praat', text: 'Praat' },
      { value: 'prolog', text: 'Prolog' },
      { value: 'properties', text: 'Properties' },
      { value: 'protobuf', text: 'Protobuf' },
      { value: 'python', text: 'Python' },
      { value: 'r', text: 'R' },
      { value: 'rdoc', text: 'Rdoc' },
      { value: 'rhtml', text: 'Rhtml' },
      { value: 'ruby', text: 'Ruby' },
      { value: 'rust', text: 'Rust' },
      { value: 'sass', text: 'Sass' },
      { value: 'scad', text: 'Scad' },
      { value: 'scala', text: 'Scala' },
      { value: 'scheme', text: 'Scheme' },
      { value: 'scss', text: 'Scss' },
      { value: 'sh', text: 'Sh' },
      { value: 'sjs', text: 'Sjs' },
      { value: 'smarty', text: 'Smarty' },
      { value: 'snippets', text: 'Snippets' },
      { value: 'soy_template', text: 'Soy_template' },
      { value: 'space', text: 'Space' },
      { value: 'sql', text: 'Sql' },
      { value: 'sqlserver', text: 'Sqlserver' },
      { value: 'stylus', text: 'Stylus' },
      { value: 'svg', text: 'Svg' },
      { value: 'swift', text: 'Swift' },
      { value: 'swig', text: 'Swig' },
      { value: 'tcl', text: 'Tcl' },
      { value: 'tex', text: 'Tex' },
      { value: 'text', text: 'Text' },
      { value: 'textile', text: 'Textile' },
      { value: 'toml', text: 'Toml' },
      { value: 'twig', text: 'Twig' },
      { value: 'typescript', text: 'Typescript' },
      { value: 'vala', text: 'Vala' },
      { value: 'vbscript', text: 'Vbscript' },
      { value: 'velocity', text: 'Velocity' },
      { value: 'verilog', text: 'Verilog' },
      { value: 'vhdl', text: 'Vhdl' },
      { value: 'xml', text: 'Xml' },
      { value: 'xquery', text: 'Xquery' },
      { value: 'yaml', text: 'Yaml' }];
    const expires = [{ value: '0', text: 'Keep Forever' },
      { value: '300', text: '5 Minutes' },
      { value: '3600', text: '1 Hour' },
      { value: '86400', text: '1 Day' },
      { value: '604800', text: '1 Week' }];
    const languageOptions = languages.map((lang) => <option key={lang.value} value={lang.value}>{lang.text}</option>);
    const expireOptions = expires.map((exp) => <option key={exp.value} value={exp.value}>{exp.text}</option>);
    return (
      <main>
        <Wrapper>
          <form onSubmit={this.checkForm} id="pasteForm">
            <div className="form-container">
              <div className="row">
                <div className="input-field col s12 m3">
                  <i className="fa fa-user prefix"></i>
                  <input id="pasteAuthor" type="text" name="pasteAuthor" onChange={this.props.onChangeAnyThing} />
                  <label htmlFor="pasteAuthor">Author</label>
                </div>
                <div className="input-field col s12 m3">
                  <i className="fa fa-flag prefix"></i>
                  <input
                    id="pasteTitle" type="text" className="" name="pasteTitle"
                    onChange={this.props.onChangeAnyThing}
                  />
                  <label htmlFor="pasteTitle">Title</label>
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
                      id="noEncrypt" className="with-gap" type="radio" name="pasteEncryption" value="no" checked
                      onChange={this.props.onChangeAnyThing}
                    />
                    <label htmlFor="noEncrypt">No Encryption</label>
                    <input
                      id="passwdEncrypt" className="with-gap" type="radio" name="pasteEncryption" value="passwd"
                      onChange={this.props.onChangeAnyThing}
                    />
                    <label htmlFor="passwdEncrypt">Encrypt with Password</label>
                    <input
                      id="pgpEncrypt" className="with-gap" type="radio" name="pasteEncryption" value="pgp"
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
  onChangeAnyThing: PropTypes.func,
  onSubmitForm: PropTypes.func,
  form: PropTypes.object,
  apikey: PropTypes.string,
  author: PropTypes.string,
  pastetitle: PropTypes.string,
  pastelanguage: PropTypes.string,
  pasteexpire: PropTypes.number,
  pasteraw: PropTypes.string,
  pasteencryption: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  // form: makeSelectForm(),
  form: makeSelectForm(),
  apikey: makeSelectApikey(),
  author: makeSelectAuthor(),
  pastetitle: makeSelectPastTitle(),
  pastelanguage: makeSelectPasteLanguage(),
  pasteexpire: makeSelectPasteExpire(),
  pasteraw: makeSelectPasteRaw(),
  pasteencryption: makeSelectPasteEncryption(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeRaw: (evt) => {
      dispatch({ type: CHANGE_RAW_CODE, name: evt });
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
      dispatch(postNewPaste());
      // dispatch(push('/about'));
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
