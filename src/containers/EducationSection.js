import React from 'react';
import Paper from '@material-ui/core/Paper';

import Education from '../components/Education';
import Sheet from '../components/Sheet';

export default class EducationSection extends React.Component {
  constructor(props) {
    super(props);
    const educationData = props.educationData;
  }
  render () {
    return (
      <div>
        <Sheet zDepth={1}>
          <Education educationData={this.props.educationData} />
        </Sheet>
      </div>
    )
  }
}
