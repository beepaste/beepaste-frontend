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
  `;
