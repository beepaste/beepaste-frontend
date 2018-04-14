/**
*
* Loading
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Typed from 'typed.js/lib/typed';
import injectReducer from 'utils/injectReducer';
import { makeSelectLoading } from 'containers/App/selectors';
import { makeSelectForm } from 'containers/HomePage/selector';
import reducer from 'containers/HomePage/reducer';
import Terminal from 'components/Terminal';
import logo from '../../img/icon.png';
let pleaseWait;


class Loading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    if (typeof window !== 'undefined') {
      pleaseWait = require('please-wait').pleaseWait;  // eslint-disable-line global-require
    }
  }
  componentDidUpdate() {
    if (this.props.loading === true) {
      this.loadingData = this.constructData(this.props.data);
      this.runScripts(0);
    } else if (this.Typedprompt) {
      this.Typedprompt.destroy();
    }
  }
  componentWillUnmount() {
    if (this.Typedprompt) {
      this.Typedprompt.destroy();
    }
  }
  constructData(data) {
    return [
      {
        action: 'type',
        strings: ['beepaste Get API KEY^400'],
        output: '<span class="gray">+ Succesfully!</span><br>&nbsp;',
        postDelay: 1000,
      },
      {
        action: 'type',
        strings: [`beepaste create --title ${data.pasteTitle} --author ${data.pasteAuthor} --expire ${data.pasteExpire} --syntax ${data.pasteLanguage}^400`],
        output: '<span class="gray">+ Done!</span><br><br><span class="gray">Thank you very much for using beepaste!</span><br>&nbsp;',
        postDelay: 1000,
      },

    ];
  }
  runScripts(pos) {
    const data = this.loadingData;
    const prompt = $(this.prompt);// eslint-disable-line no-undef
    const terminal = $(this.terminal);// eslint-disable-line no-undef
    const script = data[pos];
    if (script.clear === true) {
      $(this.history).html('');// eslint-disable-line no-undef
    }
    switch (script.action) {
      case 'type':
        $('.typed-cursor').text('');// eslint-disable-line no-undef
        this.Typedprompt = new Typed(this.prompt, {
          strings: script.strings,
          typeSpeed: 30,
          onComplete: ((hist) => () => {
            const jHistory = $(hist);
            let history = jHistory.html();
            history = history ? [history] : [];
            history.push(` hi@beepaste.io ~$ ${prompt.text()}`);
            if (script.output) {
              history.push(script.output);
              prompt.html('');
              jHistory.html(history.join('<br>'));
            }
            terminal.scrollTop(terminal.height());
            pos += 1;
            if (pos < data.length) {
              setTimeout(() => {
                this.runScripts(pos);
              }, script.postDelay || 1000);
            }
          })(this.history),
        });
        break;
      case 'view':
        break;
    }
  }
  render() {
    if (pleaseWait !== undefined) {
      if (this.props.loading === true) {
        return (
          <Terminal>
            <section className="terminal" ref={(el) => { this.terminal = el; }}>
              <div className="history" ref={(el) => { this.history = el; }}></div>
            hi@beepaste.io ~$&nbsp;<span className="prompt" ref={(el) => { this.prompt = el; }}></span>
              <span className="typed-cursor"></span>
            </section>
          </Terminal>);
      }
    }
    return (
      <div style={{ display: 'none' }}>
      </div>
    );
  }
}

Loading.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  data: makeSelectForm(),
});
const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'home', reducer });
export default compose(withReducer, withConnect)(Loading);
