import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    padding: '12px 24px',
    textAlign: 'center',
  },
  picture: {
    height: '256px',
    width: 'auto',
    borderRadius: '50%',
  },
  name: {
    color: '#212121',
    fontSize: '2rem',
    fontWeight: 700,
    marginTop: '.5rem',
    marginBottom: '0rem',
  },
  label: {
    color: '#616161',
    fontSize: '1.5rem',
    fontWeight: 400,
    marginBottom: '1rem',
  },
  link: {
    color: '#9E9E9E',
    textDecoration: 'none',
  },
  list: {
    color: '#616161',
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
    color: '#616161',
    paddingRight: '6px',
  },
  socialIcon: {
    padding: '12px',
  },
};

const ProfileHeader = (props) => {
  const { content } = props;

  const {
    name, picture, label, location, email, profiles,
  } = content;

  return (
    <div style={styles.main}>
      <img src={picture} alt="selfie" style={styles.picture} />
      <div style={styles.name}>{name}</div>
      <div style={styles.label}>{label}</div>
      <ul style={styles.list}>
        <li style={styles.contactListItem}>
          <FontAwesome name="envelope" size="lg" style={styles.inlineIcon} />
          <a style={styles.link} href={`mailto:${email}`}>
            {email}
          </a>
        </li>
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
          <a style={styles.link} href="AMezlerResume.pdf">
            <FontAwesome name="download" size="2x" style={styles.socialIcon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

ProfileHeader.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
    label: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    profiles: PropTypes.array,
  }).isRequired,
};

export default withStyles(styles)(ProfileHeader);
