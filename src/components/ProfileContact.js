import React from 'react';

const style = {margin: 15};

const ProfileContact = props => {
    const profileObj = props.profileData;
    return  <div style={style}>
                <ul className="list-unstyled contact-links text-center">
                    <li><i className="fa fa-lg fa-location-arrow"></i>{profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}</li>
                    <li><i className="fa fa-lg fa-envelope"></i><a href="mailto:{profileObj.email}">{profileObj.email}</a></li>
                </ul>
                <ul className="profileLinks list-inline text-center">
                    <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileObj.profiles[1].username}></a></li>
                    <li><a className="fa fa-linkedin fa-2x" href={'https://linkedin.com/in/'+profileObj.profiles[2].username}></a></li>
                </ul>
            </div>
        };

export default ProfileContact;
