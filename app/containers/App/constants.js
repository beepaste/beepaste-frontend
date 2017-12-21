/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const BASE_URL = 'http://localhost:3000/';
export const BACKEND_ADDRESS = 'https://beta.beepaste.io/';
export const AUTH_API = 'api/v1/auth';
export const PASTE_API = 'api/v1/paste';
export const POST_NEW_PASTE = 'POST_NEW_PASTE';
export const POST_NEW_PASTE_SUCCESS = 'POST_NEW_PASTE_SUCCESS';
export const POST_NEW_PASTE_ERROR = 'POST_NEW_PASTE_ERROR';
export const REQUEST_PASTE_NEW = 'REQUEST_PASTE_NEW';
export const CHANGE_AUTHOR = 'CHANGE_AUTHOR';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_PASTE_LANGUAGE = 'CHANGE_PASTE_LANGUAGE';
export const CHANGE_PASTE_EXPIRE = 'CHANGE_PASTE_EXPIRE';
export const CHANGE_RAW_CODE = 'CHANGE_RAW_CODE';
export const CHANGE_ENCRYPTION = 'CHANGE_ENCRYPTION';
export const CHANGE_ENCRYPTED_PASTE_RAW = 'CHANGE_ENCRYPTED_PASTE_RAW';
export const GET_PASTE_API = 'GET_PASTE_API';
export const GET_PASTE = 'GET_PASTE';
export const GET_PASTE_SUCCESS = 'GET_PASTE_SUCCESS';
export const GET_API_KEY = 'GET_API_KEY';
export const API_KEY_SUCCESS = 'API_KEY_SUCCESS';
export const CHANGE_DECRYPTED_RAW = 'CHANGE_DECRYPTED_RAW';
export const ERROR = 'ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export const MESSAGES = {
  DEFAULT_API_ERROR: 'Something\'s not right',
};
export const PGP_MODAL = {
  title: 'Encrypt your paste with PGP key',
  alert: 'pgp-key is required to encrypt your paste!',
  label: 'Your PGP public-key:',
  id: 'pgpModal',
};

export const PGP_MODAL_DECRYPT = {
  title: 'Decrypt your paste with PGP key',
  alert: 'pgp-key and passphrase are required to decrypt your paste!',
  label: 'Your PGP private-key:',
  label2: 'Your passphrase:',
  id: 'pgpModal',
};

export const PASS_MODAL = {
  title: 'Encrypt your paste with Password-OTP',
  alert: 'Your Password:',
  label: 'password is required to encrypt your paste!',
  id: 'passwordModal',
};
export const DECRYPT_PASS_MODAL = {
  title: 'Decrypt your paste with Password-OTP',
  alert: 'Your Password:',
  label: 'password is required to decrypt your paste!',
  id: 'passwordModal',
};
export const languages = [{ value: 'abap', text: 'Abap' },
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
export const expires = [{ value: '0', text: 'Keep Forever' },
  { value: '300', text: '5 Minutes' },
  { value: '3600', text: '1 Hour' },
  { value: '86400', text: '1 Day' },
  { value: '604800', text: '1 Week' }];
