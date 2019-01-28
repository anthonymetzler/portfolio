import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const NavDrawer = props => {
  return (
    <Drawer
      docked={props.docked}
      open={props.open}
      onRequestChange={props.onRequestChange}
    >
      <Menu>
        <MenuItem onTouchTap={props.close} disabled={true}>
          Portfolio (Coming Soon)
        </MenuItem>
        <MenuItem onTouchTap={props.close} disabled={true}>
          Blog (Coming Soon)
        </MenuItem>
      </Menu>
    </Drawer>
    )
  }

export default NavDrawer;
