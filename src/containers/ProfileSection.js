import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import ProfileHeader from '../components/ProfileHeader';
import ProfileContact from '../components/ProfileContact';

const style = {
  height: '100%',
  width: '100%',
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',
};

const ProfileSection = props => {
  const profileData = props.profileData;

  return (
    <div>
      <Paper style={style} zDepth={1}>
        <ProfileHeader profileData={profileData} />
        <ProfileContact profileData={profileData} />
      </Paper>
    </div>
  );
};

export default ProfileSection;
