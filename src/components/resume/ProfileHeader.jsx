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
    height: '256px',
    width: 'auto',
    borderRadius: '50%',
  },
  name: {
    fontSize: '2rem',
    fontWeight: 700,
    marginTop: '.5rem',
    marginBottom: '.5rem',
  },
  label: {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginBottom: '.5rem',
  },
  link: {
    color: '#0097A7',
  },
  list: {
    listStyleType: 'none',
    margin: '0px',
    padding: '0px',
  },
  contactListItem: {
    paddingBottom: '8px',
  },
  socialListItem: {
    paddingTop: '4px',
    paddingBottom: '8px',
  },
  inlineIcon: {
    color: '#C50E29',
    paddingRight: '6px',
  },
  socialIcon: {
    padding: '12px',
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
      <h2>{label}</h2>
      <ul style={styles.list}>
        <li style={styles.contactListItem}>
          <FontAwesome name="envelope" size="lg" style={styles.inlineIcon} />
          <a style={styles.link} href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        {/* <li style={styles.contactListItem}>
          <FontAwesome name="phone" size="lg" style={styles.inlineIcon} />
          <a style={styles.link} href={`tel:${phone}`}>
            {phone}
          </a>
        </li> */}
        <li style={styles.contactListItem}>
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
