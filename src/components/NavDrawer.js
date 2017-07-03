import React from 'react';
import Drawer from 'material-ui/Drawer';
import SiteMenu from './SiteMenu';

export default class NavDrawer extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
    <Drawer
      docked={this.props.docked}
      open={this.props.open}
      onRequestChange={this.props.onRequestChange}
    >
      <SiteMenu touchTap={this.props.close}/>
    </Drawer>
    )
  }
}
