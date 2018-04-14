/**
*
* Terminal
*
*/

import React from 'react';
// import styled from 'styled-components';


function Terminal({ children, style}) {// eslint-disable-line
  return (
    <div className="terminal-window-wrapper"><div className="terminal-window" style={{ ...style }}>
      <header>
        <div className="button green"></div>
        <div className="button yellow"></div>
        <div className="button red"></div>
      </header>
      {children}
    </div>
    </div>
  );
}

export default Terminal;
