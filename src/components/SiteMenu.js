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
          <MenuItem onTouchTap={this.props.touchTap} disabled={true}>Portfolio (Coming Soon)</MenuItem>
          <MenuItem onTouchTap={this.props.touchTap} disabled={true}>Blog (Coming Soon)</MenuItem>
        </Menu>
      </div>
    )
  }
}