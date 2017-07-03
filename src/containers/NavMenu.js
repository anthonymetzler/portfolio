import React from 'react';
import NavBar from '../components/NavBar';
import NavDrawer from '../components/NavDrawer';

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
          toggleMenu={this.handleToggle.bind(this)}
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
