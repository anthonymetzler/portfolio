import React from 'react';

const style = {margin: 15};

const About = props => {
    return (
        <div style={style}>
          <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About</h2>
          <div>{props.aboutData}</div>
        </div>
    );
};

export default About;
