import React from 'react';
import AppBar from 'material-ui/AppBar';

const NavBar = props => {
  return (
    <AppBar
      title={props.title}
      onLeftIconButtonTouchTap={props.toggleMenu}
      iconElementRight={props.iconElementRight}  
    />
    )
  }

export default NavBar;
