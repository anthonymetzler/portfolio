import React from 'react';
import FontAwesome from 'react-fontawesome';

const style = {
  margin: 25
};

const ProfileContact = props => {
  const profileObj = props.profileData;
  return <div style={style}>
    <ul className="list-unstyled contact-links text-center">
      <li>
        <FontAwesome className='fa-profile' name='location-arrow' size='lg' style={{ padding: 3 }} />
        {profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}
      </li>
      <li>
        <FontAwesome className='fa-profile' name='envelope' size='lg' style={{ padding: 3 }} />
        <a href={'mailto:' + profileObj.email}>{profileObj.email}</a>
      </li>
    </ul>
    <ul className="profileLinks list-inline text-center">
      <li>
        <a className="github" href={profileObj.profiles[0].url}>
          <FontAwesome className='fa-profile' name='github' size='2x' style={{ padding: 3 }} />
        </a>
      </li>
      <li>
        <a className="linkedin" href={profileObj.profiles[1].url}>
          <FontAwesome className='fa-profile' name='linkedin' size='2x' style={{ padding: 3 }} />
        </a>
      </li>
    </ul>
  </div>
};

export default ProfileContact;
