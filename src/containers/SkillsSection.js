import React from 'react';
import Paper from 'material-ui/Paper';

import Skills from '../components/Skills';

const style = {
  height: '100%',
  width: '100%',
  margin: 0,
  textAlign: 'left',
  display: 'inline-block',
};

const SkillsSection = props => {
  const skillsData = props.skillsData;

  return (
    <div>
      <Paper style={style} zDepth={1}>
        <Skills skillsData={skillsData} />
      </Paper>
    </div>
  );
};

export default SkillsSection;