import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    padding: '20px',
    textAlign: 'justify',
  },
  inlineIcon: {
    paddingRight: '10px',
    color: '#c50e29',
  },
  h2: {
    marginBottom: '8px',
    fontSize: '2rem',
    marginTop: '8px',
    color: '#212121',
    verticalAlign: 'center',
  },
};

const About = (props) => {
  const { content } = props;

  return (
    <div style={styles.main}>
      <h2 style={styles.h2}>
        <FontAwesome name="user" style={styles.inlineIcon} />
        About Me
      </h2>
      <div>{content}</div>
    </div>
  );
};

About.propTypes = {
  content: PropTypes.string.isRequired,
};

export default withStyles(styles)(About);
