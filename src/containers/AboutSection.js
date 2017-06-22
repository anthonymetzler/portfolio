import React from 'react';
import Paper from 'material-ui/Paper';

import About from '../components/About';


const style = {
  height: '100%',
  width: '100%',
  margin: 0,
  textAlign: 'left',
  display: 'inline-block',
};

const AboutSection = props => {
  const aboutData = props.aboutData;
  const workData = props.workData;
  const skillsData = props.skillsData;
  const educationData = props.educationData;

  return (
    <div>
      <Paper style={style} zDepth={1}>
        <About aboutData={aboutData} />
      </Paper>
    </div>
  );
};

export default AboutSection;