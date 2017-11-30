/**
 *
 * Editor
 *
 */

import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/xcode';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
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
      wrapEnabled
    />
  );
}

Editor.propTypes = {
  onChangeContent: PropTypes.func,
  mode: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Editor;
