import React from 'react';
import FontAwesome from 'react-fontawesome';

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
    marginBottom: '15px',
    fontSize: '20px',
    marginTop: '10px',
    color: '#212121',
  },
};

const About = props => (
  <div style={styles.main}>
    <h2 style={styles.h2}>
      <FontAwesome name="user" size="lg" style={styles.inlineIcon} />
      About
    </h2>
    <div>{props.aboutData}</div>
  </div>
);

export default About;
