import React from 'react';
import FontAwesome from 'react-fontawesome';

const style = {
  margin: 25
};

const About = props => {
  return (
    <div style={style}>
      <h2 className="text-uppercase">
        <FontAwesome name='user' size='2x' style={{ padding: 3 }} />
        About
      </h2>
      <div>{props.aboutData}</div>
    </div>
  );
};

export default About;
