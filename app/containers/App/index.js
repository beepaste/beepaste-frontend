import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Toast from 'components/Toast';
import Loading from 'components/Loading';
import { Helmet } from 'react-helmet';
import HomePage from 'containers/HomePage';
import ViewPastePage from 'containers/ViewPastePage';
import AboutusPage from 'containers/AboutusPage';
import NotFoundPage from 'containers/NotFoundPage';
import Footer from 'components/Footer';
import Header from 'components/Header';


export default class App extends React.Component {

  render() {
    return (
      <div className="siteBody">
        <Helmet
          defaultTitle="BeePaste"
        >
          <title>BeePaste - Yet another secure pastebin with encryption!</title>
          <meta name="description" content="Yet another secure pastebin with encryption!" />
          <meta name="twitter:card" content="summary" />
          <meta property="og:type" content="website" />
          <meta name="description" content="Yet another secure pastebin with encryption!" />
          <meta property="og:description" content="Yet another secure pastebin with encryption!" />
          <meta name="twitter:description" content="Yet another secure pastebin with encryption!" />
          <meta name="author" content="BeePaste" />
          <meta name="twitter:creator" content="@beepasteio" />
        </Helmet>
        <Header />
        <Toast />
        <Loading />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/paste/view/:id" component={ViewPastePage} />
          <Route path="/about" component={AboutusPage} />
          <Route path="/notfound" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
