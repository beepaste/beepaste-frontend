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
import { createMemoryHistory } from 'history';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

import createStore from 'configureStore';

import HtmlDocument from 'components/HtmlDocument';
import App from 'containers/App';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
function renderAppToString(store, renderProps, styleSheet) {
  const app = (
    <Provider store={store}>
      <StaticRouter location={renderProps.location} context={renderProps.context}>
        <App history={renderProps.history} />
      </StaticRouter>
    </Provider>
  );
  return renderToString(
    styleSheet ? styleSheet.collectStyles(app) : app
  );
}

async function renderHtmlDocument({ store, renderProps, assets, webpackDllNames }) {
  const first = renderAppToString(store, renderProps);

  if (renderProps.context.code === 404 && renderProps.location !== '/notfound') {
    return false;
  }
  await store.sagas.done;
  const styleSheet = new ServerStyleSheet();
  const appMarkup = renderAppToString(store, renderProps, styleSheet);
  const state = store.getState().toJS();
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

function renderAppToStringAtLocation(url, { webpackDllNames = [], assets, lang }, callback) {
  const memHistory = createMemoryHistory({
    initialEntries: [url],
  });
  const store = createStore({}, memHistory);
  const content = renderHtmlDocument({ store, renderProps: { history: memHistory, location: url, context: {} }, assets, webpackDllNames });

  callback({ html: content });
}

export {
  renderAppToStringAtLocation,
};
