import React from 'react';
import Paper from 'material-ui/Paper';

import Work from '../components/Work';

const style = {
  height: '100%',
  width: '100%',
  margin: 0,
  textAlign: 'left',
  display: 'inline-block',
};

const WorkSection = props => {
  const workData = props.workData;

  return (
    <div>
      <Paper style={style} zDepth={1}>
        <Work workData={workData} />
      </Paper>
    </div>
  );
};

export default WorkSection;
