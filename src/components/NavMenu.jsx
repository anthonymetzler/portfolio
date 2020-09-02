import React from 'react';

import Logo from './Logo';
import NavBar from './NavBar';
import NavDrawer from './NavDrawer';


export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <NavBar
          title={this.props.profileData.name}
          toggleMenu={this.handleToggle.bind(this)}
          logoIcon={<Logo logo={this.props.profileData.logo} />}
        />
        <NavDrawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
          close={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}
