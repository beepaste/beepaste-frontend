/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from 'components/Wrapper';
import { connect } from 'react-redux';
import { loadingFinished } from '../App/actions';
import errorImage from '../../img/err.png';

export class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(loadingFinished());
  }
  render() {
    return (
      <main>
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
