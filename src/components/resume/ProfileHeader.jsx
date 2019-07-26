import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  picture: {
    height: '255px',
    width: 'auto',
    borderRadius: '50%',
  },
  link: {
    color: '#0097A7',
  },
  list: {
    listStyleType: 'none',
    margin: '0px',
    padding: '0px',
  },
  listItem: {
    paddingBottom: '10px',
  },
  inlineIcon: {
    color: '#C50E29',
    paddingRight: '5px',
  },
  socialIcon: {
    padding: '10px',
  },
};

const ProfileHeader = (props) => {
  const { content } = props;

  const {
    name, picture, label, location, email, phone, profiles,
  } = content;

  return (
    <div style={styles.main}>
      <img src={picture} alt="selfie" style={styles.picture} />
      <h1>{name}</h1>
      <h1>{label}</h1>
      <ul style={styles.list}>
        <li>
          <FontAwesome name="phone" size="lg" style={styles.inlineIcon} />
          <a style={styles.link} href={`tel:${phone}`}>
            {phone}
          </a>
        </li>
        <li>
          <FontAwesome name="envelope" size="lg" style={styles.inlineIcon} />
          <a style={styles.link} href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        <li style={styles.listItem}>
          <FontAwesome
            name="location-arrow"
            size="lg"
            style={styles.inlineIcon}
          />
          <span>{`${location.city}, ${location.region}`}</span>
        </li>
        <li>
          <a style={styles.link} href={profiles[0].url}>
            <FontAwesome name="github" size="2x" style={styles.socialIcon} />
          </a>
          <a style={styles.link} href={profiles[1].url}>
            <FontAwesome name="linkedin" size="2x" style={styles.socialIcon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

ProfileHeader.propTypes = {
  content: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileHeader);
