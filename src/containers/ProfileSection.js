import React from 'react';

import ProfileHeader from '../components/ProfileHeader';
import Sheet from '../components/Sheet';

export default class ProfileSection extends React.Component {
  constructor(props) {
    super(props);
    const profileData = props.profileData;
  }
  render() {
    return (
    <div>
      <Sheet zDepth={1}>
        <ProfileHeader profileData={this.props.profileData} />
      </Sheet>
    </div>
    )
  }
}
