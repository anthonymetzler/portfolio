import React from 'react';
import NavBar from '../components/NavBar';
import NavDrawer from '../components/NavDrawer';
import Logo from '../components/Logo'

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    const profileData = props.profileData
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
          title='Anthony Metzler'
          toggleMenu={this.handleToggle.bind(this)}
          iconElementRight={<Logo logo={this.props.profileData.logo}/>}
        />
        <NavDrawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
          close={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}
