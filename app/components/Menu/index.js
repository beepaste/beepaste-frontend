/**
 *
 * Menu
 *
 */

import React from 'react';
import DropdownMenu from '../DropdownMenu/index';
import SingleMenu from '../SingleMenu/index';
import Wrapper from '../Menu/Wrapper';
import { makeSelectLocation } from '../../containers/App/selectors';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class Menu extends React.Component {
  render() {
    let items = [
      { name: 'Create Paste', to: '/', iconclass: 'fa fa-plus-circle' }, {
        name: 'About Us',
        to: '/about',
        iconclass: 'fa fa-info',
      }];


    items = items.map((item, i) => (<Wrapper to={item.to} key={`item${i}`}>
      {item.items !== undefined ?
        <DropdownMenu {...item} />
          :
        <SingleMenu {...item} />
        }
    </Wrapper>
    ));

    return (
      <ul className={this.props.className} id={this.props.id}>{items}</ul>
    );
  }
}

Menu.propTypes = {
};

export default Menu;
