/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'materialize-css/dist/js/materialize';

import App from 'containers/App';
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./images/android-icon-144x144.png'
import '!file-loader?name=[name].[ext]!./images/android-icon-192x192.png'
import '!file-loader?name=[name].[ext]!./images/android-icon-36x36.png'
import '!file-loader?name=[name].[ext]!./images/android-icon-48x48.png'
import '!file-loader?name=[name].[ext]!./images/android-icon-72x72.png'
import '!file-loader?name=[name].[ext]!./images/android-icon-96x96.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon-114x114.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon-120x120.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon-144x144.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon-152x152.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon-180x180.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon-57x57.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon-60x60.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon-72x72.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon-76x76.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon.png'
import '!file-loader?name=[name].[ext]!./images/apple-icon-precomposed.png'
import '!file-loader?name=[name].[ext]!./images/favicon-16x16.png'
import '!file-loader?name=[name].[ext]!./images/favicon-32x32.png'
import '!file-loader?name=[name].[ext]!./images/favicon-96x96.png'
import '!file-loader?name=[name].[ext]!./images/icon-300x300.png'
import '!file-loader?name=[name].[ext]!./images/ms-icon-144x144.png'
import '!file-loader?name=[name].[ext]!./images/ms-icon-150x150.png'
import '!file-loader?name=[name].[ext]!./images/ms-icon-310x310.png'
import '!file-loader?name=[name].[ext]!./images/ms-icon-70x70.png'



import '!file-loader?name=[name].[ext]!./manifest.json';
import '!file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import CSS reset and Global Styles
import './global-styles';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App history={history} />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

// Chunked polyfill for browsers without Intl support

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
