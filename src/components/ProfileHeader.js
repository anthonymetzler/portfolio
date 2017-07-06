import React from 'react';
import Avatar from 'material-ui/Avatar';
import FontAwesome from 'react-fontawesome';

const styles = {
  main: {
    padding: '20px',
    textAlign: 'center'
  },
  list: {
    listStyleType: 'none',
    margin: '0px',
    padding: '0px'
  },
  listItem: {
    paddingBottom: '10px'
  },
  inlineIcon: {
    paddingRight: '5px'
  },
  socialIcon: {
    padding: '10px'
  }  
};

const ProfileHeader = props => {
  const profileObj = props.profileData;
  return (
    <div style={styles.main}>
      <Avatar src={profileObj.picture} size={250} />
      <h1>{profileObj.label}</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <FontAwesome name='location-arrow' size='lg' style={styles.inlineIcon} />
          {profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}
        </li>
        <li>
          <FontAwesome name='envelope' size='lg' style={styles.inlineIcon} />
          <a href={'mailto:' + profileObj.email}>{profileObj.email}</a>
        </li>
        <li>
          <a href={profileObj.profiles[0].url}>
            <FontAwesome name='github' size='2x' style={styles.socialIcon} />
          </a>
          <a href={profileObj.profiles[1].url}>
            <FontAwesome name='linkedin' size='2x' style={styles.socialIcon} />
          </a>
        </li>
      </ul>
    </div>
  )
};

export default ProfileHeader;
