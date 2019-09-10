import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    padding: '12px 24px',
    textAlign: 'justify',
  },
  inlineIcon: {
    paddingRight: '8px',
    color: '#616161',
  },
  header: {
    marginBottom: '8px',
    fontSize: '2rem',
    marginTop: '8px',
    color: '#212121',
    fontWeight: 700,
    verticalAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    color: '#212121',
  },
};

const About = (props) => {
  const { content } = props;

  return (
    <div style={styles.main}>
      <div style={styles.header}>
        <FontAwesome name="user" style={styles.inlineIcon} />
        About Me
      </div>
      <div style={styles.content}>{content}</div>
    </div>
  );
};

About.propTypes = {
  content: PropTypes.string.isRequired,
};

export default withStyles(styles)(About);
