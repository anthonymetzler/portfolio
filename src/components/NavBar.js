import React from 'react';
import AppBar from 'material-ui/AppBar';

const NavBar = props => {
  return (
    <AppBar onLeftIconButtonTouchTap={props.toggleMenu}/>
    )
  }

export default NavBar;
