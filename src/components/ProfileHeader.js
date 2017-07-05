import React from 'react';
import Avatar from 'material-ui/Avatar';

const style = {
  margin: 25
};

const ProfileHeader = props => {
  const profileObj = props.profileData;
  return <div style={style}>
    <Avatar src={profileObj.picture} size={250} />
    <h1>{profileObj.label}</h1>
  </div>
};

export default ProfileHeader;