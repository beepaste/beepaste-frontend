/**
 * Server side rendering application entry module.
 *
 * This module is being transpiled by webpack and placed under
 * server/middlewares/ as `generated.serverEntry.js`.
 *
 * The server uses it to render the app at given location.
 */
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext } from 'history';
import { END } from 'redux-saga';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

// Global styles should be injected before any other scoped style, so make sure
// this file is imported before any styled component.
// import 'global-styles';

import createStore from 'configureStore';
import createHistory from 'history/createMemoryHistory';

import HtmlDocument from 'components/HtmlDocument';
import App from 'containers/App';
import syncHistoryWithStore from 'setup/syncHistoryWithStore';
import monitorSagas from 'utils/monitorSagas';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
function renderAppToString(store, renderProps, styleSheet) {
  console.log('router', renderProps);
  const app = (
    <Provider store={store}>
      <ConnectedRouter {...renderProps}>
      <App history={renderProps.history} />
      </ConnectedRouter>
    </Provider>
  );

  return renderToString(
    styleSheet ? styleSheet.collectStyles(app) : app
  );
}

async function renderHtmlDocument({ store, renderProps, sagasDone, assets, webpackDllNames }) {
  // 1st render phase - triggers the sagas
  renderAppToString(store, renderProps);

  // send signal to sagas that we're done
  store.dispatch(END);

  // wait for all tasks to finish
  await sagasDone();

  // capture the state after the first render
  const state = store.getState().toJS();

  // prepare style sheet to collect generated css
  const styleSheet = new ServerStyleSheet();

  // 2nd render phase - the sagas triggered in the first phase are resolved by now
  const appMarkup = renderAppToString(store, renderProps, styleSheet);

  // capture the generated css
  const css = styleSheet.getStyleElement();

  const doc = renderToStaticMarkup(
    <HtmlDocument
      appMarkup={appMarkup}
      state={state}
      head={Helmet.rewind()}
      assets={assets}
      css={css}
      webpackDllNames={webpackDllNames}
    />
  );
  return `<!DOCTYPE html>\n${doc}`;
}

function is404(routes) {
  return routes.some((r) => r.name === 'notfound');
}

function renderAppToStringAtLocation(url, { webpackDllNames = [], assets, lang }, callback) {
  const memHistory = createMemoryHistory({
    initialEntries: [url]
  });
  const store = createStore({}, memHistory);

  // syncHistoryWithStore(memHistory, store);
  //
  // const routes = createHistory(store);

  const sagasDone = monitorSagas(store);

  const content = renderHtmlDocument({store,renderProps:{ history: memHistory, location: url } , sagasDone, assets, webpackDllNames});
  console.log('content', content);
  callback({ html: content, notFound : false});
}

export {
  renderAppToStringAtLocation,
};
