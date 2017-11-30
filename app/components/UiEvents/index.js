/**
 *
 * UiEvents
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';


function UiEvents({ error, loading }) {
  if (loading) {
    return (<div>loading</div>);
  }
  if (error) {
    return <div>{error.messag}</div>;
  }
  return (
    <div>
      salam
    </div>
  );
}

UiEvents.propTypes = {
  error: PropTypes.any,
  loading: PropTypes.any,
};

export default UiEvents;
