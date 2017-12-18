/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from 'containers/HomePage';
import ViewPastePage from 'containers/ViewPastePage';
import DocumentPage from 'containers/DocumentPage';
import AboutusPage from 'containers/AboutusPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import reducer from './reducer';
import saga from './saga';
import { connect } from 'react-redux';
import { compose, dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectFooter, makeSelectError, makeSelectLoading } from 'containers/App/selectors';

import UiEvents from 'components/UiEvents';
import Toast from 'components/Toast';
import Loading from 'components/Loading';
import { loadingFinished } from './actions';
export default class App extends React.Component {

  render() {
    const props = this.props;
    return (
      <div>
        <Helmet
          titleTemplate="BeePaste"
          defaultTitle="BeePaste"
        >
          <meta name="description" content="Yet another secure pastebin with encryption!" />
        </Helmet>
        <Header />
        <Toast />
        <Loading />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/view/:id" component={ViewPastePage} />
          <Route path="/about" component={AboutusPage} />
          <Route path="/notfound" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// export default connect(withRouter)(App);
