import React from 'react';
import { END } from 'redux-saga';
import { Helmet } from 'react-helmet';
import Terminal from 'components/Terminal';
import { connect } from 'react-redux';
import { BASE_URL } from 'containers/App/constants';
import { loadingFinished } from '../App/actions';
import logo from '../../img/beepaste-sq.png';

export class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(history) {
    super();
    if (history.staticContext) {
      history.staticContext.code = 404;
    }
    this.baseUrlWithoutSlash = BASE_URL.slice(0, -1);
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
      <div>
        <Helmet>
          <title>BeePaste - Not Found</title>
          <meta property="og:title" content="404 Not found - BeePaste" />
          <meta property="og:site_name" content="BeePaste - A Safe Pastebin!" />
          <meta name="description" content="Page not found! Try a different URL." />
          <meta name="twitter:card" content="summary" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={this.baseUrlWithoutSlash + logo} />
          <meta name="twitter:image" content={this.baseUrlWithoutSlash + logo} />
          <meta name="description" content="Page not found! Try a different URL." />
          <meta property="og:description" content="Page not found! Try a different URL." />
          <meta name="twitter:description" content="Page not found! Try a different URL." />
          <meta name="author" content="BeePaste" />
          <meta name="twitter:creator" content="@beepasteio" />
        </Helmet>
        <Terminal style={{ width: 750, height: 600 }}>
          <section className="terminal">
            <pre className="cow">
              {`
               _____________________
               < Oppps! Not Found :( >
                ---------------------
                         \\
                          \\
               
               
                     ^^      .-=-=-=-.  ^^
                 ^^        (\`-=-=-=-=-\`)         ^^
                         (\`-=-=-=-=-=-=-\`)  ^^         ^^
                   ^^   (\`-=-=-=-=-=-=-=-\`)   ^^                            ^^
                       ( \`-=-=-=-(@)-=-=-\` )      ^^
                       (\`-=-=-=-=-=-=-=-=-\`)  ^^
                       (\`-=-=-=-=-=-=-=-=-\`)              ^^
                       (\`-=-=-=-=-=-=-=-=-\`)                      ^^
                       (\`-=-=-=-=-=-=-=-=-\`)  ^^
                        (\`-=-=-=-=-=-=-=-\`)          ^^
                         (\`-=-=-=-=-=-=-\`)  ^^                 ^^
                     jgs   (\`-=-=-=-=-\`)
                            \`-=-=-=-=-\`
               
              `}
            </pre>
          </section>
        </Terminal>
      </div>
    );
  }
}

export default connect()(NotFound);
