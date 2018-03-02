import { injectGlobal } from 'styled-components';
import '!file-loader?name=[name].[ext]!./fonts/FontAwesome.otf';
import '!file-loader?name=[name].[ext]!./fonts/fontawesome-webfont.eot';
import '!file-loader?name=[name].[ext]!./fonts/fontawesome-webfont.svg';
import '!file-loader?name=[name].[ext]!./fonts/fontawesome-webfont.ttf';
import '!file-loader?name=[name].[ext]!./fonts/fontawesome-webfont.woff';
import '!file-loader?name=[name].[ext]!./fonts/fontawesome-webfont.woff2';

import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Bold.eot';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Bold.ttf';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Bold.woff';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Bold.woff2';

import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Light.eot';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Light.ttf';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Light.woff';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Light.woff2';

import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Medium.eot';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Medium.ttf';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Medium.woff';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Medium.woff2';

import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Regular.eot';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Regular.ttf';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Regular.woff';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Regular.woff2';

import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Thin.eot';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Thin.ttf';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Thin.woff';
import '!file-loader?name=[name].[ext]!./fonts/roboto/Roboto-Thin.woff2';
import './css/style.css';
import './css/font-awsome.css';
import 'please-wait/build/please-wait.css';
import 'spinkit/css/spinners/5-pulse.css';
/* eslint no-unused-expressions: 0 */
injectGlobal`
.textInMenuItem{
  padding-left:5px;
}
.sticky-footer{
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}
.terminal-window-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #6D7074;
}
.terminal-window {
  text-align: left;
  width: 600px;
  height: 360px;
  border-radius: 10px;
  margin: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.terminal-window header {
  background: #E0E8F0;
  height: 30px;
  border-radius: 8px 8px 0 0;
  padding-left: 10px;
}

.terminal-window header .button {
  width: 12px;
  height: 12px;
  margin: 10px 4px 0 0;
  display: inline-block;
  border-radius: 8px;
}

.terminal-window header .button.green {
  background: #3BB662;
}

.terminal-window header .button.yellow {
  background: #E5C30F;
}

.terminal-window header .button.red {
  background: #E75448;
}

.terminal-window section.terminal {
  color: white;
  font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
  font-size: 11pt;
  background: #30353A;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 30px;
  bottom: 0;
  overflow: auto;
}

.terminal-window section.terminal .typed-cursor {
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
}
@keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}

.terminal-data { display: none; }
.terminal-window .gray { color: gray; }
.terminal-window .green { color: green;}
  `;
