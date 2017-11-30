/* eslint-disable react/jsx-indent */
/**
*
* DropdownMenu
*
*/

import React from 'react';
import Wrapper from '../Menu/Wrapper';
import SingleMenu from '../SingleMenu';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function DropdownMenu({ name, items }) {
  const dropdownitems = items.map((item, i) => (<Wrapper key={`item${i}`} active={item.active}>
    <SingleMenu {...item} />
  </Wrapper>
  ));
  return (
    <div>
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        {name}
      </a>
      <ul className="dropdown-menu">{dropdownitems}</ul>
    </div>
  );
}

DropdownMenu.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array,
};

export default DropdownMenu;
