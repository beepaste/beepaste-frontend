import React from 'react';
import { Link } from 'react-router-dom';
import { END } from 'redux-saga';
import { Helmet } from 'react-helmet';
import Wrapper from 'components/Wrapper';
import { connect } from 'react-redux';
import { loadingFinished } from '../App/actions';
import errorImage from '../../img/err.png';
import logo from '../../img/beepaste-sq.png';

export class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(history) {
    super();
    if (history.staticContext) {
      history.staticContext.code = 404;
    }
  }
  componentWillMount() {
    if (typeof window === 'undefined') {
      this.props.dispatch(END);
    }
  }
  componentDidMount() {
    this.props.dispatch(loadingFinished());
  }
  render() {
    return (
      <main>
      <Helmet>
        <title>BeePaste - Not Found</title>
        <meta property="og:image" content={logo} />
        <meta name="twitter:image" content={logo} />
        <meta property="og:title" content="404 Not found - BeePaste" />
        <meta property="og:site_name" content="BeePaste - A Safe Pastebin!" />
        <meta name="description" content="Page not found! Try a different URL." />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Page not found! Try a different URL." />
        <meta property="og:description" content="Page not found! Try a different URL." />
        <meta name="twitter:description" content="Page not found! Try a different URL." />
        <meta name="author" content="BeePaste" />
        <meta name="twitter:creator" content="@beepasteio" />
      </Helmet>
        <Wrapper title="404: Page Not Found">
          <div className="col s6 m4">
            <img className="responsive-img" src={errorImage} alt="not found image" />
          </div>
          <div className="col s6 m8 valign-wrapper">
            <h4>Check the url or if there is a bug, report it to <Link to="https://github.com/beepaste">BeePaste</Link></h4>
          </div>
          <div className="col s12 m8">
            <span><Link to="/"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> return to the home page</Link></span>
          </div>
        </Wrapper>
      </main>
    );
  }
}

export default connect()(NotFound);
