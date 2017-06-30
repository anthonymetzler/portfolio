import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple `AppBar` with no icon.
 * By default, a left icon is a navigation-menu.
 */

const Nav = () => (
  <AppBar
    title=""
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    showMenuIconButton={false}
  />
);

export default Nav;