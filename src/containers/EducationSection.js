import React from 'react';
import Paper from 'material-ui/Paper';

import Education from '../components/Education';

const style = {
  height: '100%',
  width: '100%',
  margin: 0,
  textAlign: 'left',
  display: 'inline-block',
};

const EducationSection = props => {
  const educationData = props.educationData;

  return (
    <div>
      <Paper style={style} zDepth={1}>
        <Education educationData={educationData} />
      </Paper>
    </div>
  );
};

export default EducationSection;
