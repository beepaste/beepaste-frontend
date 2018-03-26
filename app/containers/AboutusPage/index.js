import React from 'react';
import PropTypes from 'prop-types';
import { END } from 'redux-saga';
import { Helmet } from 'react-helmet';
import Wrapper from 'components/Wrapper';
import Author from 'components/Author';
import { AUTHORS_FIRST_ROW, AUTHORS_SECOND_ROW } from 'containers/App/constants';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loadingFinished } from '../App/actions';

export class AboutusPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if (typeof window === 'undefined') {
      this.props.endSaga();
    }
  }
  componentDidMount() {
    this.props.appLoaded();
  }
  render() {
    const firstRow = AUTHORS_FIRST_ROW.map((item) => <Author key={item.id} {...item} ></Author>);
    const secondRow = AUTHORS_SECOND_ROW.map((item) => <Author key={item.id} {...item} ></Author>);
    return (
      <main>
        <Helmet>
          <title>BeePaste - About BeePaste</title>
        </Helmet>
        <Wrapper title="About BeePaste">
        <h5 id="whatisbeeit">What is BeeIT?</h5>
          <p>The BeeIT services first goal is to provide <a href="https://www.fsf.org/">free</a> tools for developers society and form a social network among them.</p>
        <h5 id="whatisbeepaste">What is BeePaste?</h5>
          <p>BeePaste is the first service available from BeeIT services aimed to provide a secure platform to store text data (also know as Pastebin).</p>
        <h5 id="whoareourusers">Who are our users?</h5>
          <p>As mentioned above, our main users are developers and corporations in IT industry whom want to have third-parties to handle some of their tasks; for example they can periodically backup their server configurations on BeePaste servers securely then access their configurations anywhere anytime on the internet.</p>
        <h5 id="whatbeepastesuggests">What BeePaste suggests?</h5>
          <p>BeePaste's most outstanding feature is our emphasis on protecting our users' and their data privacy, secrecy, and security! For instance they can encrypt their data on their end using one of 2 provided methods (PGP or AES) before sending them to our servers. Furthermore, this encrypted paste can only be decrypted by the people having the corresponding secret-key (who are usually authorized by the user) and we don't have access to the plaintext!</p>
        <h5 id="whatdoweuse">What do we use?</h5>
          <p>On server-side, we are using Python and <a href="http://sanic.readthedocs.io/en/latest/index.html">Sanic</a>, while we are using JavaScript and <a href="https://reactjs.org/">React</a> for front-end (and some <a href="https://nodejs.org/en/">Node.js</a>!).</p>
          <p>As our services are aimed to promote free software, our source-codes are available on gitlab publicly under <a href="https://gitlab.com/beeit">BeeIT Group</a>! We have chosen gitlab because it not only simple to use and free, but also provides an integrated set of development tools such as CI/CD, task management and team management services.</p>
          <p>Moreover, one of our concerns is scalability and availability. To solve this issue, we use efficient tools like <a href="https://www.docker.com/">Docker</a> (and we are migrating to <a href="http://rancher.com/">Rancher</a> for orchestration) for container management, <a href="https://www.nginx.com/">NGiNX</a> as web-server and load-balancer.</p>
        </Wrapper>
        <div className="container">
          <div className="row">
            {firstRow}
          </div>
          <div className="row">
            {secondRow}
          </div>
        </div>
      </main>
    );
  }
}

AboutusPage.propTypes = {
  appLoaded: PropTypes.func,
  endSaga: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    endSaga: () => {
      dispatch(END);
    },
    appLoaded: () => {
      dispatch(loadingFinished());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(
  withConnect,
)(AboutusPage);
