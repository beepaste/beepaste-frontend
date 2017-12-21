/**
 *
 * AboutusPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from 'components/Wrapper';
import Author from 'components/Author';
import { AUTHORS_FIRST_ROW, AUTHORS_SECOND_ROW } from 'containers/App/constants';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loadingFinished } from '../App/actions';

export class AboutusPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.appLoaded();
  }
  render() {
    const firstRow = AUTHORS_FIRST_ROW.map((item) => <Author key={item.id} {...item} ></Author>);
    const secondRow = AUTHORS_SECOND_ROW.map((item) => <Author key={item.id} {...item} ></Author>);
    return (
      <main>
        <Wrapper title="About BeePaste">
          <p><strong>BeePaste</strong> is a simple pastebin which is written using <strong>python</strong>, and <strong>pyramid framework</strong>. It's very first usage was just to share our code snippets with friends, but while we grew up, we saw new worlds, such as <code>Sys admins</code>, <code>Bloggers</code> and <code>Teachers</code>, whomever has some text to share with others! They also needed somewhere to share their pastes like <code>server logs</code>, <code>blog posts</code> and <code>homework</code> while they are chatting with others. So <strong>BeePaste</strong> is getting bigger and more useful by time, from a simple pastebin, it is becoming an advanced text sharing platform!</p>
          <p>Now let's see what are its features:</p>
          <blockquote>
            Paste safely with <strong>client-side</strong> paste encryption! (optional)
          </blockquote>
          <blockquote>
            If you are a sysadmin or just want to send server logs to someone, you can paste it within the shell! just use <code>cat LOGFILE | nc beepaste.ir 1111</code>! for more information, please visit <a href="https://github.com/beepaste/pastecat">PasteCat Repository</a>
          </blockquote>
          <blockquote>
            Also there is an <strong>rest-ful API</strong> which you can build your apps based on!
          </blockquote>
          <blockquote>
            It is using <strong>ACE EDIT</strong> as editor and its powerful features like <strong>syntax highlighting</strong>
          </blockquote>
          <blockquote>
            And more upcoming features are on the way to the server :))
          </blockquote>
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
};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    appLoaded: () => {
      dispatch(loadingFinished());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(
  withConnect,
)(AboutusPage);
