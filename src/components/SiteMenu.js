import React from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class SiteMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Menu>
          <MenuItem onTouchTap={this.props.touchTap}>Portfolio</MenuItem>
          <MenuItem onTouchTap={this.props.touchTap}>Blog</MenuItem>
        </Menu>
      </div>
    )
  }
}